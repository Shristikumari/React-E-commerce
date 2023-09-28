import { React, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import "../Products.scss";
const SeachProducts = ({ optionType, inputPlaceholder }) => {
  const [filterSearch, setFilterSearch] = useState(false);

  const searchfItem = () => {
    setFilterSearch(!filterSearch);
  };
  const cutSearch = () => {
    setFilterSearch();
  };

  return (
    <>
      <div className="search-container">
        {!filterSearch ? (
          <>
            <h3 style={{ marginLeft: "30px", marginTop: "10px" }}>
              {optionType}
            </h3>

            <SearchIcon
              onClick={searchfItem}
              style={{
                padding: "6px",
                backgroundColor: "rgb(245, 245, 246)",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                color: "gray",
                marginLeft: "70px",
              }}
            />
          </>
        ) : (
          <>
            <input type="search" placeholder={inputPlaceholder} />
            <CloseIcon
              onClick={cutSearch}
              style={{
                position: "absolute",
                left: "222px",
                marginTop: "7px",
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default SeachProducts;
