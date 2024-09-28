import modalCancel from '@/public/assets/icons/general/modal_cancel.png';
import modify from '@/public/assets/icons/general/modify.png';
import user from '@/public/assets/icons/general/user.png';


export default function UpdateInformationModal({active, setActive}: {active: boolean, setActive: any}) {
    return (
        <>
            {active ? 
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-head">
                        <span className="modal-head-name">기본 정보 수정</span>
                        <button className="modal-head-cancel" onClick={() => setActive(false)}>
                            <img src={modalCancel.src}/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="profile-information-modify">
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">프로필 사진</span>
                                </div>
                                <div>
                                    <div className="profile-information-modify--photo-wrapper">
                                        <img src={user.src} className="profile-information-modify--photo"/>
                                        <label className="profile-information-modify--photo-modify-btn">
                                            <input type="file"/>
                                            <img src={modify.src}/>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">닉네임</span>
                                </div>
                                <div>
                                    <input type="text" className="input--red-color"/>
                                </div>
                                <span className="com--remark remark--blue-color">사용 가능한 닉네임 입니다.</span>
                                <span className="com--remark remark--red-color">사용 불가한 닉네임 입니다.</span>
                                <span className="com--remark remark--yellow-color">yellow</span>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">회사</span>
                                </div>
                                <div>
                                    <input type="text"/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">국가</span>
                                </div>
                                <div>
                                    <select name="">
                                        <option value="">미국</option>
                                        <option value="">영국</option>
                                        <option value="">튀르키예</option>
                                        <option value="">대한민국</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">Githup</span>
                                </div>
                                <div>
                                    <input type="text"/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className="profile-information-modify-name">Linkedin</span>
                                </div>
                                <div>
                                    <input type="text"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <div className="com--btn-wrap">
                            <button className="com--cancel-btn">취소</button>
                            <button className="com--main-btn">저장</button>
                        </div>
                    </div>
                </div>
            </div>
            : <></>}
        </>
        
    )
}