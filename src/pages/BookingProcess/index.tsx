import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/react';
import { copyOutline } from 'ionicons/icons';
export default function BookingProcess(params) {
    return (<IonPage>
        <IonHeader className="bg-purple-600">
            <IonToolbar className="bg-purple-600">
                <IonTitle className="text-white">Package Tracking</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="p-4 bg-gray-100">
            <div>
                <h3>Thông tin tài xế</h3>
                <div>
                    <p className="text-xs text-gray-500">Name: </p>
                    <p className="text-sm font-semibold uppercase">lê công tiến đạt</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Phone Number:</p>
                    <div>
                        <p className="text-lg font-semibold">0766-667-020 </p>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Rating: </p>
                    <p className="text-lg font-semibold">123 Main St, Anytown, USA</p>

                </div>

            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-sm text-gray-500">Tracking number</p>
                        <p className="text-lg font-semibold">#013167923451</p>
                    </div>
                    <IonIcon icon={copyOutline} className="text-purple-600" size="large" />
                </div>
                <div>
                    <p className="text-sm font-semibold mb-2">Package Status</p>
                    <div className="relative flex flex-col">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-4 h-4 flex-shrink-0">
                                <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                                <div className="absolute left-1/2 top-full w-px h-full bg-purple-600 transform -translate-x-1/2"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Courier Requested</p>
                                <p className="text-xs text-gray-500">20/02/2021 17:53PM</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <div className="relative w-4 h-4 flex-shrink-0">
                                <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                                <div className="absolute left-1/2 top-full w-px h-full bg-purple-600 transform -translate-x-1/2"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Package picked-up</p>
                                <p className="text-xs text-gray-500">20/02/2021 17:53PM</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <div className="relative w-4 h-4 flex-shrink-0">
                                <div className="w-4 h-4 rounded-full border-2 border-purple-600 bg-white"></div>
                                <div className="absolute left-1/2 top-full w-px h-full bg-gray-300 transform -translate-x-1/2"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">In transit</p>
                                <p className="text-xs text-gray-500">20/02/2021 17:53PM</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <div className="relative w-4 h-4 flex-shrink-0">
                                <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-400">Package delivered</p>
                                <p className="text-xs text-gray-400">20/02/2021 17:53PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <IonButton expand="block" className="mt-6 bg-purple-600 text-white">
                    View Package Info
                </IonButton>
            </div>
        </IonContent>
    </IonPage>)
};