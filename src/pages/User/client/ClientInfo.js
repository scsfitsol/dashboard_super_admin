import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, Row, TabContent, TabPane, NavLink } from 'reactstrap'
import classnames from "classnames"
import CONSTANT, { getTableData, StatusButton, TAB_DATA } from '../../Utility/constnt'
import moment from 'moment'
import useHttp from '../../../components/Hook/Use-http'
import Table from '../../../components/Custome/table'
import { useParams } from 'react-router-dom'

const ClientInfo = () => {
    let clientId = window.location.pathname.split('/')[2];
    const params = useParams();
    const [activeTab, setactiveTab] = useState(1)
    const [tripData, setTripData] = useState([]);
    const [plantData, setPlantData] = useState([]);
    const API_CALL = useHttp();
    const toggleCustomJustified = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab)
        }
    }
    useEffect(() => {
        (async () => {
            const CLIENT_URL = {
                endpoint: `/trip/?clientId=${clientId}`,
                type: "GET",
            }
            API_CALL.sendRequest(CLIENT_URL, tripDataHandler);
            const PLANT_URL = {
                endpoint: `/plant/?clientId=${clientId}`,
                type: "GET",
            }
            API_CALL.sendRequest(PLANT_URL, plantDataHandler);
        })();
    }, []);

    const tripDataHandler = (res) => {
        setTripData(
            res?.data.map((tripData, index) => {
                return {
                    ...tripData,
                    no: index + 1,
                    clientName: tripData?.client?.name,
                    transporterName: tripData?.transporter?.transporterName,
                    driverName: tripData?.driver?.name,
                    driverPhoneNumber: tripData?.driver?.mobile,
                    vehicleNumber: tripData?.vehicle?.registrationNumber,
                    plantName: tripData?.plant?.unitName,
                    startDateAndTime: moment(tripData?.startDateAndTime).format('DD-MM-YYYY') + " : " + moment(tripData?.startDateAndTime).format('LT'),
                    targetedDateAndTime: moment(tripData?.targetedDateAndTime).format('DD-MM-YYYY') + " : " + moment(tripData?.targetedDateAndTime).format('LT'),
                    statusData: (
                        <>
                            <StatusButton
                                value={tripData?.status}
                            />
                        </>
                    ),
                };
            })
        );
    };

    const plantDataHandler = (res) => {
        setPlantData(
            res?.data.map((plantData, index) => {
                return {
                    ...plantData,
                    no: index + 1,
                    clientName: plantData.client.name,
                };
            })
        );
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <Row>
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="page-title mb-0 font-size-18">Client Info</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item active">
                                        Welcome to Fitsol Dashboard
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col sm={4} className="d-none">
                        <Card
                            style={{
                                width: '100%',
                            }}
                        >
                            <CardBody style={{ backgroundColor: '#2f4395', color: 'white' }}>
                                Name : Nayan
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} className='p-0'>
                        <Card>
                            <CardBody>
                                <Nav tabs className="nav-tabs-custom nav-justified">
                                    {
                                        TAB_DATA.CLIENT_TAB.map((data, index) => {
                                            return (
                                                <div key={index} className="mt-2" style={{ width: '100px' }}>
                                                    <NavItem>
                                                        <NavLink
                                                            style={{ cursor: "pointer" }}
                                                            className={classnames({
                                                                active: activeTab === data.tabId, 'activeTabDesign': activeTab === data.tabId, 'TabDesign': true
                                                            })}
                                                            onClick={() => {
                                                                toggleCustomJustified(data.tabId)
                                                            }}
                                                        >
                                                            <span className="d-none d-sm-block">{data.name}</span>
                                                        </NavLink>
                                                    </NavItem>
                                                </div>
                                            )
                                        })
                                    }
                                </Nav>
                                <TabContent activeTab={activeTab} className='mt-3 p-0 TabBody'>
                                    <TabPane tabId={1} className="py-3">
                                        <Table
                                            title="Trips List"
                                            data={{ columns: CONSTANT.DATA_TABLE_COLUME_INFO.trips, rows: tripData }}
                                        />
                                    </TabPane>
                                    <TabPane tabId={2} className="py-3 px-0">
                                        <Table
                                            title="Sites List"
                                            data={{ columns: CONSTANT.DATA_TABLE_COLUME_INFO.plant, rows: plantData }}
                                        />
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ClientInfo