import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polyline } from "google-maps-react"
import { Col, Row } from "reactstrap"
import { connect } from "react-redux"
import CONSTANT from "../Utility/constnt"
import useHttp from "../../components/Hook/Use-http"
import axios from "axios"

import defaultImage from "../../assets/images/UserImage.jpg";
import MapTruck from '../../assets/images/MapTruck.png'
// import './css/style.css'

const LoadingContainer = () => <div>Loading...</div>

const TrackMap = (props) => {
    const API_CALL = useHttp();
    const [mapDataLive, setMapDataLive] = useState([])
    const [tripData, setTripData] = useState([])
    const mapData = [
        {
            position: { lat: 13.693, lng: 79.5946 },
            id: 1,
        },
        {
            position: { lat: 12.9716, lng: 77.5946 },
        },
        {
            position: { lat: 8.5199, lng: 76.9413 },
        },
        {
            position: { lat: 22.7196, lng: 75.8577 },
        },
        {
            position: { lat: 18.5204, lng: 73.8567 },
        },
        {
            position: { lat: 13.1984, lng: 78.4828 },
        },
    ]

    useEffect(() => {
        (async () => {
            API_CALL.sendRequest(CONSTANT.API.getMapLocation, MapLocationHandler);
            API_CALL.sendRequest(CONSTANT.API.getAllTrip, getAllHandler);
        })();
    }, []);

    const MapLocationHandler = (res) => {
        const location = res?.data.map((data) => {
            if (data?.latitude && data?.longtitude) {
                return { lat: data?.latitude, lng: data?.longtitude }
            }
        })
        const data = location.filter((data) => data !== undefined)
        setMapDataLive( location.filter((data) => data !== undefined) )
    };

    const getAllHandler = (data) => {
        setTripData({
            position: null,
            id: data.id,
            value: data.id,
            adddatas: data?.sourceLocation,
            plant: `${data?.plant?.unitName} ${data?.plant?.location}`,
            vehicle: data?.vehicle,
            driver: data?.driver,
            startDate: data?.startDateAndTime,
            completedDateAndTime: data?.targetedDateAndTime,
            sourceLocation: data?.sourceLocation,
            destinationLocation: data?.destinationLocation,
        })
    }

    useEffect(() => {
        axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=21.1702401,72.83106070000001&destination=19.0759837,72.8776559&key=AIzaSyAIh5rjUYY8SoLb14LUnxrbhD2XnRsF_78')
            .then((e) => {
                console.log('success', e)
            })
            .catch((e) => {
                console.log('catch', e)
            })
    }, [])


    return (
        <div>
            <Row>
                <Col lg={12} className='p-0'>
                    <div
                        id="gmaps-markers"
                        className="gmapsCoustem"
                        style={{ position: "relative", height: "84vh" }}
                    >
                        <Map
                            google={props.google}
                            style={{ width: "100%", height: "86vh", borderRadius: '10px' }}
                            zoom={6}
                            center={{ lat: 13.693, lng: 79.5946 }}
                            fullscreenControl={false}

                        >
                            {mapData.map((e) => {
                                return (
                                    <Marker
                                        title={"The marker`s title will appear as a tooltip."}
                                        name={"SOMA"}
                                        position={e.position}
                                        // icon={{
                                        //     url: MapTruck,
                                        //     fillColor: '#EB00FF',
                                        //     scaledSize: new google.maps.Size(60, 60),
                                        // }}
                                    />
                                )
                            })
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