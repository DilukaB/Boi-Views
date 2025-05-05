import React from 'react';

const DeclarationDetails = ({ data }) => {
    return (
        <div className="p-6 bg-white max-w-full">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Declaration Details
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
                I declare that the information furnished above in this application, attachments, and otherwise represented are true and correct, and I undertake to inform the BOI immediately if there is any change in the information provided.
            </p>

            {/* Signature and Date Section */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:space-x-12 space-y-6 sm:space-y-0">
                <div>
                    <p className="text-gray-700 mb-1 font-medium text-base">Customer Signature:</p>
                    <div className="border-b border-gray-400 h-10 w-64"></div>
                </div>
                <div>
                    <p className="text-gray-700 mb-1 font-medium text-base">Date:</p>
                    <div className="border-b border-gray-400 h-10 w-48"></div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-base">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left border">Investor ID</th>
                            <th className="px-4 py-3 text-left border">Name</th>
                            <th className="px-4 py-3 text-left border">Designation</th>
                            <th className="px-4 py-3 text-left border">Address</th>
                            <th className="px-4 py-3 text-left border">Phone</th>
                            <th className="px-4 py-3 text-left border">Fax</th>
                            <th className="px-4 py-3 text-left border">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((declaration, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 || index !== 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-green-50 transition duration-200`}
                            >
                                <td className="px-4 py-3 border">{declaration.investorID}</td>
                                <td className="px-4 py-3 border">{declaration.cname}</td>
                                <td className="px-4 py-3 border">{declaration.designation}</td>
                                <td className="px-4 py-3 border">
                                    {[declaration.cadD1, declaration.cadD2, declaration.cadD3].filter(Boolean).join(', ')}
                                </td>
                                <td className="px-4 py-3 border">{declaration.ctel}</td>
                                <td className="px-4 py-3 border">{declaration.cfax}</td>
                                <td className="px-4 py-3 border">
                                    <a
                                        href={`mailto:${declaration.ceml}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {declaration.ceml}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeclarationDetails;