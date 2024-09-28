import modalCancel from '@/public/assets/icons/general/modal_cancel.png';

export default function UpdatePasswordModal({active, setActive}: {active: boolean, setActive: any}) {
    return (
        <>
            {active ? 
            <div className="modal">
                <div className="modal-container" style={{width: '400px'}}>
                    <div className="modal-head">
                        <span className="modal-head-name">패스워드 변경</span>
                        <button className="modal-head-cancel" onClick={() => setActive(false)}>
                            <img src={modalCancel.src}/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="profile-information-modify">
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">현재 패스워드</span>
                                </div>
                                <div>
                                    <input type="password"/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">변경 패스워드</span>
                                </div>
                                <div>
                                    <input type="password"/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">변경 패스워드 확인</span>
                                </div>
                                <div>
                                    <input type="password"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <div className="com--btn-wrap">
                            <button className="com--main-btn">변경</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <></>}
        </>
        
    )
}