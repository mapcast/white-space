import modalCancel from '@/public/assets/icons/general/modal_cancel.png';

export default function UpdateTopicModal({active, setActive}: {active: boolean, setActive: any}) {
    return (
        <>
            {active ? 
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-head">
                        <span className="modal-head-name">관심 주제 수정</span>
                        <button className="modal-head-cancel" onClick={() => setActive(false)}>
                            <img src={modalCancel.src}/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="profile-topic-modify">
                            <li>
                                <label className="profile-topic-modify-btn">
                                    <input type="checkbox"/>
                                    <span>SW 보안</span>
                                </label>
                            </li>
                            <li>
                                <label className="profile-topic-modify-btn">
                                    <input type="checkbox"/>
                                    <span>SW 개발</span>
                                </label>
                            </li>
                            <li>
                                <label className="profile-topic-modify-btn">
                                    <input type="checkbox"/>
                                    <span>HW 보안</span>
                                </label>
                            </li>
                            <li>
                                <label className="profile-topic-modify-btn">
                                    <input type="checkbox"/>
                                    <span>HW 개발</span>
                                </label>
                            </li>
                            <li>
                                <label className="profile-topic-modify-btn">
                                    <input type="checkbox"/>
                                    <span>클라우드 구축</span>
                                </label>
                            </li>
                            <li>
                                <label className="profile-topic-modify-btn">
                                    <input type="checkbox"/>
                                    <span>클라우드 보안</span>
                                </label>
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
        
    );
}