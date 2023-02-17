import React, { useEffect, useState } from 'react'
import moment from 'moment';
import useHttp from '../../components/Hook/Use-http';
import CONSTANT, { getTableData, StatusButton, TAB_DATA } from '../Utility/constnt';
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import Table from '../../components/Custome/table';
import classnames from "classnames"


const VehiclesInfo = () => {
    let DriverId = window.location.pathname.split('/')[2];
    const [activeTab, setactiveTab] = useState(1)
    const [tripData, setTripData] = useState([]);
    const API_CALL = useHttp();
    const toggleCustomJustified = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab)
        }
    }
    useEffect(() => {
        (async () => {
            const TRIP_URL = {
                endpoint: `/trip/?vehicleId=${DriverId}`,
                type: "GET",
            }
            API_CALL.sendRequest(TRIP_URL, tripDataHandler);
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
                    <Col sm={4}>
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
                                        TAB_DATA.DRIVER_TAB.map((data, index) => {
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
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default VehiclesInfo