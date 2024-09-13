type ModalProps = {
    showCreateModal: Boolean
    children: JSX.Element
}

function CreateWLModal({showCreateModal, children}: ModalProps) {
    if(!showCreateModal) return null;

    //w-11/12 md:w-1/2 lg:w-1/3
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="p-1.5 bg-gradient-to-b from-[#7CC5FA] to-[#5A20BA] rounded-[20px]">
                <div className="py-10 px-28 bg-white rounded-[20px] shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CreateWLModal;