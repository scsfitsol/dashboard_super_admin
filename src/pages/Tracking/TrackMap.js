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
    const { id } = props

    let TripID = window.location.pathname.split('/')[2];
    const API_CALL = useHttp();
    const [tripOneData, setTripData] = useState([])
    const [complateRoute, setComplateRoute] = useState([])
    const [mapDataLive, setMapDataLive] = useState([])
    const [tripStep, setTripStep] = useState(1)
    const [routesBounds, setRoutesBounds] = useState()  // Google API response path
    const [startEndLocation, setStartEndLocation] = useState([])

    const startAndEndLocation = async (trip) => {
        var geocoder = new props.google.maps.Geocoder();
        const mapData = trip[0]?.sourceId !== undefined && trip[0]?.destinationId !== undefined &&
            await Promise.all([trip[0]?.sourceId, trip[0]?.destinationId].map(async (id) => {
                const location = await geocoder.geocode({ placeId: id })
                try {
                    return { lat: location?.results[0]?.geometry?.location.lat(), lng: location?.results[0]?.geometry?.location.lng() }
                }
                catch (err) {
                    console.log(err)
                }
            }))
            if(mapData !== false){
                setStartEndLocation(mapData)
            }
    }

    useEffect(() => {
        (async () => {
            setTripStep(0)
            setMapDataLive([])

            const URL = {
                endpoint: `/location/${TripID ? TripID : id}`,
                type: "GET",
            }
            API_CALL.sendRequest(URL, MapLocationHandler);
            const TripURL = {
                endpoint: `/trip/${TripID ? TripID : id}`,
                type: "GET",
            }
            API_CALL.sendRequest(TripURL, tripDataHandler);
        })();
    }, [id, TripID]);

    const tripDataHandler = (res) => {
        (async () => {
            setTripData(res?.data)
            await startAndEndLocation(res?.data)
        })()
    }

    const MapLocationHandler = (res) => {
        const location = res?.data.map((val) => {
            if (val?.latitude && val?.longtitude) {
                return {
                    loc: { lat: val?.latitude, lng: val?.longtitude },
                    time: val?.updateLocationTime,
                    address: val?.detailedAddress,
                    id: val?.id
                }
            }
        })
        const mapRoute = location.filter((val) => val?.loc !== undefined)
        setComplateRoute(mapRoute)

        setMapDataLive(mapRoute.map((e) => e.loc))

        if (Object.keys(tripOneData).length > 0 && !mapRoute.length > 0) {
            notify.error('Tracking Data Not Found')
        }

    };

    useEffect(() => {
        if (complateRoute.length > 0 && startEndLocation.length > 0) {
            var directionsService = new props.google.maps.DirectionsService();
            var directionsRenderer = new props.google.maps.DirectionsRenderer();
            var request = {
                origin: complateRoute[complateRoute.length - 1].loc,
                destination:  startEndLocation[1],
                travelMode: 'DRIVING'
            };
            directionsService.route(request, function (response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                    setRoutesBounds(response.routes[0].overview_path)
                }
            });
        }
    }, [id, TripID, complateRoute, startEndLocation])

    return (
        <div>
            <Row>
                <Col lg={12} className='p-0'>
                    <div
                        id="gmaps-markers"
                        className="gmapsCoustem"
                        style={{ position: "relative", height: ` ${TripID ? '80vh' : '50vh'}` }}
                    >
                        <Map
                            google={props.google}
                            style={{ width: "100%", height: ` ${TripID ? '80vh' : '50vh'}`, borderRadius: '10px' }}
                            zoom={8}
                            center={complateRoute[complateRoute.length-1]?.loc || { lat: 21.1458, lng: 79.0882 }}
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
                                path={complateRoute.reverse().map((e) => e.loc)}
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
                                            <p>{moment(complateRoute[tripStep - 1]?.time).format('LL, LT')}</p>
                                            <p>{complateRoute[tripStep - 1]?.address}</p>

                                            <Slider
                                                value={tripStep}
                                                min={1}
                                                max={complateRoute.length}
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