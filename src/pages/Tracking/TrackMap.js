import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polyline } from "google-maps-react"
import { Card, CardBody, Col, Row } from "reactstrap"
import { connect } from "react-redux"
import useHttp from "../../components/Hook/Use-http"
import MapTruck from '../../assets/images/MapTruck.png'
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import notify from "../Utility/coustemFunction"
import moment from "moment/moment"

const LoadingContainer = () => <div>Loading...</div>

const TrackMap = (props) => {
    const { data } = props
    const API_CALL = useHttp();
    const [tripData, setTripData] = useState([])
    const [mapDataLive, setMapDataLive] = useState([])
    const [tripStep, setTripStep] = useState(1)
    const [routesBounds, setRoutesBounds] = useState()  // Google API response path
    const [routePath, setRoutePath] = useState([])  // BAckEnd API response path
    const [startEndLocation, setStartEndLocation] = useState([])

    const startAndEndLocation = async () => {
        var geocoder = new props.google.maps.Geocoder();
        const mapData = data?.sourceId !== undefined && data?.destinationId !== undefined &&
            await Promise.all([data?.sourceId, data?.destinationId].map(async (id) => {
                const location = await geocoder.geocode({ placeId: id })
                try {
                    return { lat: location?.results[0]?.geometry?.location.lat(), lng: location?.results[0]?.geometry?.location.lng() }
                }
                catch (err) {
                    console.log(err)
                }
            }))
        mapData !== false && setStartEndLocation(mapData)
    }

    useEffect(() => {
        (async () => {
            setTripStep(0)
            setRoutePath([])
            setMapDataLive([])
            await startAndEndLocation()
            const URL = {
                endpoint: `/location/${data.id}`,
                type: "GET",
            }
            API_CALL.sendRequest(URL, MapLocationHandler);
        })();
    }, [data]);

    const MapLocationHandler = (res) => {
        const location = res?.data.map((data) => {
            if (data?.latitude && data?.longtitude) {
                return {
                    loc: { lat: data?.latitude, lng: data?.longtitude },
                    time: data?.updateLocationTime,
                    address: data?.detailedAddress,
                    id: data?.id
                }
            }
        })
        const mapRoute = location.filter((data) => data?.loc !== undefined)
        setTripData(mapRoute)
        setRoutePath(mapRoute.reverse().map((e) => e.loc))

        setMapDataLive(mapRoute.map((e) => e.loc))

        if (Object.keys(data).length > 0 && !mapRoute.length > 0) {
            notify.error('Tracking Data Not Found')
        }

    };

    useEffect(() => {
        if (tripData.length > 0) {
            var directionsService = new props.google.maps.DirectionsService();
            var directionsRenderer = new props.google.maps.DirectionsRenderer();
            var request = {
                origin: tripData[0].loc,
                destination: startEndLocation[1],
                travelMode: 'DRIVING'
            };
            directionsService.route(request, function (response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                    setRoutesBounds(response.routes[0].overview_path)
                }
            });
        }
        else {
            setStartEndLocation([])
        }

    }, [data, tripData])

    return (
        <div>
            <Row>
                <Col lg={12} className='p-0'>
                    <div
                        id="gmaps-markers"
                        className="gmapsCoustem"
                        style={{ position: "relative", height: "50vh" }}
                    >
                        <Map
                            google={props.google}
                            style={{ width: "100%", height: "50vh", borderRadius: '10px' }}
                            zoom={8}
                            center={routePath[0] || { lat: 21.1458, lng: 79.0882 }}
                            fullscreenControl={false}
                        >
                            {startEndLocation.map((e, index) => {
                                return (
                                    <Marker
                                        key={index}
                                        title={"The marker`s title will appear as a tooltip."}
                                        name={"SOMA"}
                                        position={e}
                                    />
                                )
                            })
                            }
                            {
                                tripStep > 0 &&
                                <Marker
                                    title={"The marker`s title will appear as a tooltip."}
                                    name={"SOMA"}
                                    position={mapDataLive[tripStep - 1]}
                                    icon={{
                                        url: MapTruck,
                                        fillColor: '#EB00FF',
                                        // scaledSize: new google.maps.Size(60, 60),
                                    }}
                                />
                            }
                            <Polyline
                                path={routePath}
                                fillColor="#0000FF"
                                fillOpacity={1}
                                strokeColor="#0000FF"
                                strokeOpacity={0.8}
                                strokeWeight={4}
                            />
                            <Polyline
                                path={routesBounds}
                                fillColor="red"
                                fillOpacity={1}
                                strokeColor="red"
                                strokeOpacity={0.8}
                                strokeWeight={4}
                            />
                            <InfoWindow>
                                <div>
                                    <p>SURAT</p>
                                </div>
                            </InfoWindow>
                        </Map>
                        {
                            mapDataLive.length > 0 &&
                            <Col md={3} className='MapRangeSlider'>
                                <div className="p-3">
                                    <Card>
                                        <CardBody className="py-0 pt-3 text-start">
                                            <p>{moment(tripData[tripStep - 1]?.time).format('LL, LT')}</p>
                                            <p>{tripData[tripStep - 1]?.address}</p>

                                            <Slider
                                                value={tripStep}
                                                min={1}
                                                max={tripData.length}
                                                // labels={tripData.map((e) => e.time)}
                                                orientation="horizontal"
                                                onChange={value => {
                                                    setTripStep(value)
                                                }}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        }
                    </div>
                </Col>
            </Row>
        </div >
    )
}

TrackMap.propTypes = {
    google: PropTypes.object,
}

export default connect(null)(
    GoogleApiWrapper({
        apiKey: process.env.REACT_APP_MAP_KEY,
        LoadingContainer: LoadingContainer,
        v: "3",
    })(TrackMap)
)