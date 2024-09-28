import modalCancel from '@/public/assets/icons/general/modal_cancel.png';

export default function UpdateOptionModal({active, setActive}: {active: boolean, setActive: any}) {
    return (
        <>
            {active ? 
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-head">
                        <span className="modal-head-name">옵션 수정</span>
                        <button className="modal-head-cancel" onClick={() => setActive(false)}>
                            <img src={modalCancel.src}/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="profile-information-modify">
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">언어</span>
                                </div>
                                <div>
                                    <select name="">
                                        <option value="">영어</option>
                                        <option value="">일본어</option>
                                        <option value="">중국어(간체)</option>
                                        <option value="">한국어</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">스타일</span>
                                </div>
                                <div>
                                    <select name="" disabled>
                                        <option value="">Light</option>
                                        <option value="">Dark</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <button className="com--main-btn" style={{width: '200px'}}>패스워드 변경</button>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <div className="com--btn-wrap">
                            <button className="com--main-btn">저장</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <></>}
        </>
        
    )
}