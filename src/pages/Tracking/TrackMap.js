import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polyline } from "google-maps-react"
import { Col, Row } from "reactstrap"
import { connect } from "react-redux"
import useHttp from "../../components/Hook/Use-http"
import axios from "axios"

import defaultImage from "../../assets/images/UserImage.jpg";
import MapTruck from '../../assets/images/MapTruck.png'
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"

const LoadingContainer = () => <div>Loading...</div>

const TrackMap = (props) => {
    const { data } = props
    const API_CALL = useHttp();
    const [tripData, setTripData] = useState([])
    const [mapDataLive, setMapDataLive] = useState([])
    const [startEndLocation, setStartEndLocation] = useState([])
    const [tripStep, setTripStep] = useState(0)

    useEffect(() => {
        (async () => {
            setTripStep(0)
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
                    address: data?.detailedAddress
                }
            }
        })
        const mapRoute = location.filter((data) => data?.loc !== undefined)
        setTripData(mapRoute)
        if (mapRoute.length > 0) {
            setStartEndLocation([mapRoute[0].loc, mapRoute[mapRoute.length - 1].loc]);
        }
        else {
            setStartEndLocation([])
        }
        setMapDataLive(mapRoute.map((e) => e.loc))
    };

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
                            center={mapDataLive[0]}
                            fullscreenControl={false}

                        >
                            {startEndLocation.map((e) => {
                                return (
                                    <Marker
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
                                path={mapDataLive}
                                fillColor="#0000FF"
                                fillOpacity={1}
                                strokeColor="#0000FF"
                                strokeOpacity={0.8}
                                strokeWeight={4}
                            />
                            <InfoWindow>
                                <div>
                                    <h1>Surat</h1>
                                </div>
                            </InfoWindow>
                        </Map>
                        <Col md={3} className='MapRangeSlider'>
                            <div className="p-3">
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
                            </div>
                        </Col>
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
        apiKey: "AIzaSyAIh5rjUYY8SoLb14LUnxrbhD2XnRsF_78",
        LoadingContainer: LoadingContainer,
        v: "3",
    })(TrackMap)
)