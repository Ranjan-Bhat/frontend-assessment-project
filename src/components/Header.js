import "./Header.css";
const Header = ({ editSquare, paper }) => {
  return (
    <div className="group-parent">
      <div className="educator-parent">
        <div className="educator">Educator</div>
        <div className="arthshala">Arthshala</div>
        <img className="arrow-up-2" alt="" src="/arrow--up-2.svg" />
      </div>
      <div className="instance-parent2">
        <div className="frame-parent">
          <div className="category-parent">
            <img className="category-icon" alt="" src="/category.svg" />
            <div className="planning">Planning</div>
          </div>
          <img className="instance-child" alt="" src="/vector-1.svg" />
        </div>
        <div className="edit-square-parent">
          <img className="category-icon" alt="" src={editSquare} />
          <div className="planning">Documentation</div>
        </div>
        <div className="edit-square-parent">
          <img className="category-icon" alt="" src={paper} />
          <div className="planning">Housekeeping</div>
        </div>
      </div>
      <div className="search-parent">
        <img className="search-icon" alt="" src="/search.svg" />
        <img className="search-icon" alt="" src="/notification.svg" />
        <div className="ivan-parent">
          <img className="ivan-icon" alt="" src="/ivan@2x.png" />
          <img className="arrow-up-21" alt="" src="/arrow--up-21.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
