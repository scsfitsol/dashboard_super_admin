import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import BillForm from './index';
import { Row } from 'reactstrap';

const DownloadBill = () => {
    const reportTemplateRef = useRef(null);

    const handleGeneratePdf = () => {
        const doc = new jsPDF({
            orientation: 'p',
            format: [1500, 1900],
            unit: 'px',
        });

        // Adding the fonts.  
        doc.setFont('Inter-Regular', 'normal');

        doc.html(reportTemplateRef.current, {
            async callback(doc) {
                await doc.save('document');
            },
        });
    };

    return (
        <div>
            <React.Fragment>
                <div className="page-content">
                    <Row>
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <h4 className="page-title mb-0 font-size-18">Trip</h4>

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
                    <button className="button" onClick={handleGeneratePdf}>
                        Generate PDF
                    </button>
                    <div ref={reportTemplateRef}>
                        <BillForm />
                    </div>

                </div>
            </React.Fragment>
        </div>
    )
}

export default DownloadBill