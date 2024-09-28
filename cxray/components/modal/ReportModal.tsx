import modalCancel from '@/public/assets/icons/general/modal_cancel.png';

export default function ReportModal({active, setActive}: {active: boolean, setActive: any}) {
    return (
        <>
            {active ? 
            <div className="modal">
                <div className="modal-container">
                    <div className="modal-head">
                        <span className="modal-head-name">게시글 신고</span>
                        <button className="modal-head-cancel" onClick={() => setActive(false)}>
                            <img src={modalCancel.src}/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="com--modal-information">
                            <ul>
                                <li>
                                    <span className="modal-information--name">신고 유형</span>
                                </li>
                                <li>
                                    <select>
                                        <option value="">욕설/비난</option>
                                        <option value="">부적절한 닉네임</option>
                                        <option value="">부적절한 내용</option>
                                        <option value="">기타</option>
                                    </select>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="modal-information--name">내용</span>
                                </li>
                                <li>
                                    <textarea name="">Lorem</textarea>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="">
                            <button className="com--warning-btn">신고</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <></>}
        </>
        
    )
}