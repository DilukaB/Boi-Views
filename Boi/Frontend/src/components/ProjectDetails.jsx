import React from 'react';

const ProjectDetails = ({ data }) => {
    const headers = [
        'Investor ID',
        'Project Type',
        'Description',
        'Project Name',
        'HO Address D1',
        'HO Address D2',
        'HO Address D3',
        'HO Address D4',
        'Hotel',
        'Fax',
        'Email',
        'Project Activity',
    ];

    const values = [
        data.investorID,
        data.projectType,
        data.projectDes,
        data.projectName,
        data.hoadD1,
        data.hoadD2,
        data.hoadD3,
        data.hoadD4,
        data.hotel,
        data.hofax,
        data.hoeml,
        data.itProjectActivity,
    ];

    return (
        <div className="p-6 bg-white shadow-lg rounded-xl overflow-x-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Project Details
            </h2>
            <table className="min-w-full text-sm text-left text-gray-700 border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 border border-gray-300">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {values.map((value, index) => (
                            <td key={index} className="px-4 py-2 border border-gray-300">
                                {value || 'N/A'}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProjectDetails;
