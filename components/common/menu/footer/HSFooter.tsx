
export default function HSFooter({items, sub, fixed}: {items: HSFooterCategory[], sub?: HSFooterItem, fixed?: boolean}) {
  return (
    <footer>
      <div className="footer-row">
        {items.map((item: HSFooterCategory) => 
        <div key={item.title} className="footer-footer-col">
          <div>
            <h4>{item.title}</h4>
            <ul>
              {item.items.map((subItem: HSFooterItem) => 
              <li><a href={subItem.link} target="_blank">{subItem.text}</a></li>)}
            </ul>
          </div>
        </div>)}
      </div>
      {sub ? 
      <div className="footer-notice">
        <a href={sub.link} target="_blank">{sub.text}</a>
      </div> : <></>}
      <style jsx>{`
        footer {
          width: 100%;
          border-top: 3px solid rgba(0,0,0,0.1);
          padding: 30px 0;
          min-width: 1024px;
           ${fixed ? 
            'position: fixed; bottom: 0; left: 0;' : ''
          }
        }
       
        .footer-container{
          max-width: 1170px;
          margin:auto;
        }
        .footer-row{
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
        }
        ul {
          list-style: none;
          padding-inline-start: 5px;
        }
        .footer-footer{
          padding: 70px 0;
        }
        .footer-footer-col{
          flex-grow: 1;
          max-width: 250px;
          padding: 0 15px;
          display: flex;
          justify-content: center;
        }
        .footer-footer-col h4{
          font-size: 18px;
          color: #000;
          text-transform: capitalize;
          margin-bottom: 25px;
          font-weight: 500;
          position: relative;
        }
        .footer-footer-col h4::before{
          content: '';
          position: absolute;
          left:0;
          bottom: -10px;
          background-color: rgb(110, 0, 254);
          height: 2px;
          box-sizing: border-box;
          width: 80px;
        }
        .footer-footer-col ul li:not(:last-child){
          margin-bottom: 10px;
        }
        .footer-footer-col ul li a{
          font-size: 16px;
          text-transform: capitalize;
          color: #666;
          text-decoration: none;
          font-weight: 300;
          display: block;
          transition: all 0.3s ease;
        }
        .footer-footer-col ul li a:hover{
          color: #000;
          padding-left: 3px;
        }
        .footer-footer-col .social-links a{
          display: inline-block;
          height: 40px;
          width: 40px;
          background-color: rgba(255,255,255,0.2);
          margin:0 10px 10px 0;
          text-align: center;
          line-height: 40px;
          border-radius: 50%;
          color: #BBB;
          transition: all 0.5s ease;
        }
        .footer-footer-col .social-links a:hover{
          color: #24262b;
          background-color: #000;
        }
        .footer-notice {
          width: 100%;
          text-align: center;
          margin-top: 30px;
        }
        a {
          text-decoration: none;
        }
        .footer-notice a {
          color: #666;
        }
        .footer-notice a:hover {
          color: #000;
        }
      `}</style>
    </footer>
  )
}