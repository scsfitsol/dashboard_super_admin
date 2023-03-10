import React from 'react'
import './style/global.css'
import './style/index.css'
import logo from '../../assets/images/image-2@2x.png'
import lastImage from '../../assets/images/image-3@2x.png'


const BillForm = () => {
    return (
        <>
            <table border="0" cellPadding="0" cellSpacing="0" id="sheet0" className="sheet0 gridlines" style={{padding:'10px'}}>
                <tbody>
                    <tr className="row1">
                        <td className="column1 style76 null style84" colSpan="4" rowSpan="3">
                            <img style={{ zIndex: 1, left: '4px', width: '596px', height: '164px' }} src={logo} border="0" />
                        </td>
                        <td className="column5 style88 s style89" colSpan="2">DOCKET NO</td>
                        <td className="column7 style90 s style95" colSpan="3" rowSpan="3">FITSOL SUPPLY CHAIN SOLUTIONS PRIVATE LIMITED<br />
                            <span style={{ fontWeight: 'bold', color: '#000000', fontFamily: 'Arial Black', fontSize: '12pt' }}>Arjun MLU Plaza,Plot No 7, S-204 ,Sector-5,Dwarka New Delhi, 110075</span><span style={{ fontWeight: 'bold', color: '#000000', fontFamily: 'Arial Black', fontSize: '11pt' }}><br />
                            </span></td>
                    </tr>
                    <tr className="row2">
                        <td className="column5 style96 s style99" colSpan="2" rowSpan="2"><br />
                            001<br />
                        </td>
                    </tr>
                    <tr className="row3">

                    </tr>
                    <tr className="row4">
                        <td className="column1 style15 s"> BRANCH CODE</td>
                        <td className="column2 style16 s">FROM </td>
                        <td className="column3 style74 s style75" colSpan="2">TO</td>
                        <td className="column5 style87 s style87" colSpan="2">Dated :</td>
                        <td className="column7 style71 s style73" colSpan="3">Vehicle No :</td>
                    </tr>
                    <tr className="row5">   
                        <td className="column1 style2 null"></td>
                        <td className="column2 style3 null"></td>
                        <td className="column3 style51 null style51" colSpan="2"></td>
                        <td className="column5 style85 s style86" colSpan="2">Owner Risk</td>
                        <td className="column7 style55 s style57" colSpan="3">MODE</td>
                    </tr>
                    <tr className="row6">
                        <td className="column1 style54 s style52" colSpan="3">CONSIGNOR</td>
                        <td className="column4 style52 s style53" colSpan="3">CONSIGNEE</td>
                        <td className="column7 style24 s">ROAD</td>
                        <td className="column8 style20 s">TRAIN</td>
                        <td className="column9 style21 s">AIR</td>
                    </tr>
                    <tr className="row7">
                        <td className="column1 style41 null style42" colSpan="3" rowSpan="4"></td>
                        <td className="column4 style42 null style43" colSpan="3" rowSpan="4"></td>
                        <td className="column7 style64 s style65" colSpan="2">FREIGHT DETAILS</td>
                        <td className="column9 style22 s">AMOUNT</td>
                    </tr>
                    <tr className="row8">
                        <td className="column7 style32 s style33" colSpan="2">BASIC FREIGHT</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row9">
                        <td className="column7 style32 s style33" colSpan="2">FUEL SURCHARGES</td>
                        <td className="column9 style7 null"></td>
                    </tr>
                    <tr className="row10">
                        <td className="column7 style32 s style33" colSpan="2">DOCKET CHARGES</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row11">
                        <td className="column1 style44 s style45" colSpan="3">GST NO</td>
                        <td className="column4 style45 s style46" colSpan="3">GST NO</td>
                        <td className="column7 style32 s style33" colSpan="2">F.O.V</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row12">
                        <td className="column1 style44 s style45" colSpan="3">TEL NO.</td>
                        <td className="column4 style45 s style46" colSpan="3">TEL NO.</td>
                        <td className="column7 style32 s style33" colSpan="2">LOADING / UNLOADING</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row13">
                        <td className="column1 style8 s">NOS OF PACKAGE</td>
                        <td className="column2 style9 s">ACTUAL WGT</td>
                        <td className="column3 style9 s">CHARGE WGT</td>
                        <td className="column4 style70 s style70" colSpan="2">VOLUMETRIC SIZE</td>
                        <td className="column6 style10 s">CONTENT DESCRICTION</td>
                        <td className="column7 style32 s style33" colSpan="2">COLLECTION CHARGES</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row14">
                        <td className="column1 style66 null style66" rowSpan="4"></td>
                        <td className="column2 style67 null style67" rowSpan="4"></td>
                        <td className="column3 style67 null style67" rowSpan="4"></td>
                        <td className="column4 style67 null style67" colSpan="2" rowSpan="4"></td>
                        <td className="column6 style68 null style68" rowSpan="4"></td>
                        <td className="column7 style32 s style33" colSpan="2">DELIVERY CHARGES</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row15">
                        <td className="column7 style32 s style33" colSpan="2">COD/DOD</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row16">
                        <td className="column7 style32 s style33" colSpan="2">TO  PAY</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row17">
                        <td className="column7 style34 s style35" colSpan="2">OTHER IF ANY</td>
                        <td className="column9 style13 null"></td>
                    </tr>
                    <tr className="row18">
                        <td className="column1 style11 s">INVOICE NO</td>
                        <td className="column2 style5 null"></td>
                        <td className="column3 style36 s style36" rowSpan="5">Recd by <br />
                            FSCSPL</td>
                        <td className="column4 style36 s style69" colSpan="3" rowSpan="5">GOODS RECEIVED IN GOOD CONDITION<br />
                            <br />
                            <br />
                            <br />
                            <br />
                            NAME               STAMP         SIGNATURE</td>
                        <td className="column7 style28 s style29" colSpan="2">SUB .TOTAL</td>
                        <td className="column9 style25 null"></td>
                    </tr>
                    <tr className="row19">
                        <td className="column1 style11 s">INVOICE VALUE</td>
                        <td className="column2 style12 null"></td>
                        <td className="column7 style30 s style31" colSpan="2">IGST</td>
                        <td className="column9 style14 null"></td>
                    </tr>
                    <tr className="row20">
                        <td className="column1 style11 s">E-WAYBILL NO</td>
                        <td className="column2 style12 null"></td>
                        <td className="column7 style32 s style33" colSpan="2">SGST</td>
                        <td className="column9 style6 null"></td>
                    </tr>
                    <tr className="row21">
                        <td className="column1 style11 s">INSURANCE NO.</td>
                        <td className="column2 style19 null"></td>
                        <td className="column7 style34 s style35" colSpan="2">CGST</td>
                        <td className="column9 style13 null"></td>
                    </tr>
                    <tr className="row22">
                        <td className="column1 style47 s style48" rowSpan="3">SHIPPER'S SIGNATURE</td>
                        <td className="column2 style49 s style50" rowSpan="3">Stamp</td>
                        <td className="column7 style28 s style29" colSpan="2">GRAND TOTAL</td>
                        <td className="column9 style23 null"></td>
                    </tr>
                    <tr className="row23">
                        <td className="column3 style37 null style40" colSpan="4" rowSpan="2"></td>
                        <td className="column7 style58 s style63" colSpan="3" rowSpan="2">Reach us At<br />
                            www.fitsolscs.com<br />
                            Phone -011-46547302<br />
                            Email: info@fitsollogistics.com<br />
                        </td>
                    </tr>
                    <tr className="row24">

                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BillForm