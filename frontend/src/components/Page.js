

export default function Page({page, text}){
    return (
        <div className="page">
          <div className="page-content">
            <h2 className="page-header">Page header -</h2>
            <div className="page-image"></div>
            <div className="page-text">{text}</div>
            <div className="page-footer">{page}</div>
          </div>
        </div>
      );
    
}