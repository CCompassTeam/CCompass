type ModalProps = {
    showModal: boolean
    setShowModal: Function
    children: JSX.Element
};

function InfoModal({ showModal, setShowModal, children }: ModalProps) {
    if (!showModal) return null;

    //w-11/12 md:w-1/2 lg:w-1/3
    return (
        <div className="fixed inset-0 w-full flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={() => setShowModal(!showModal)}>
            <div className="p-1.5 bg-gradient-to-b from-[#7CC5FA] to-[#5A20BA] rounded-[53.39px]">
                <div className="py-6 px-8 bg-white rounded-[53.39px] shadow-lg">

                    <div className="flex justify-end">
                        <button className="text-2xl text-gray-500 hover:text-gray-700">
                            &#9932;
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default InfoModal;