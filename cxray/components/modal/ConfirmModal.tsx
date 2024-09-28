
export default function ConfirmModal({active, setActive}: {active: boolean, setActive: any}) {
    return (
        <>
            {active ? 
            <div className="alert-modal">
                <div className="modal-container" style={{width: '400px'}}>
                    <div className="modal-body">
                        <span className="alert-modal-text">패스워드 변경이 완료 되었습니다.</span>
                    </div>
                    <div className="modal-footer">
                        <div className="com--btn-wrap">
                            <button className="com--main-btn" onClick={() => setActive(false)}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <></>}
        </>
        
    )
}