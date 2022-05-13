import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
function SidebarFilter({ SIDEBAR_OPTIONS, title }) {
  const history = useHistory();
  const location = useLocation();
  const [selectedFields, setSelectedFields] = useState({});
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  }, []);

  const handleSidebarChange = (name, value) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (value.length > 0) {
      urlParams.set(name, value);
    } else {
      urlParams.delete(name);
    }
    // console.log("PARAMS", params.toString());
    history.push({ pathname: location.pathname, search: urlParams.toString() });
  };
  const getSidebarValue = (name) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(name);
  };

  const removeSidebarParams = (name) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.delete(name);
    // console.log("PARAMS", params.toString());
    history.push({ pathname: location.pathname, search: urlParams.toString() });
  };
  console.log("SELECTED FIELDS", selectedFields);
  console.log("SELECTED FIELDS CHECK", selectedFields["contact_number"]);

  return (
    <div className="col-lg-3">
      <div
        className="card"
        style={{ boxShadow: "rgb(227 233 243) 0px 4px 22px" }}
      >
        <div className="card-header">
          <h4 className="card-title"> FILTER {title} BY </h4>
        </div>
        <div className="card-body">
          {SIDEBAR_OPTIONS &&
            SIDEBAR_OPTIONS.map((item) => {
              return (
                <div>
                  <div className="topping">
                    <input
                      type="checkbox"
                      id={item.field}
                      onChange={(e) => {
                        if (e.target.checked) {
                          const newFields = selectedFields;
                          newFields[item.field] = true;

                          setSelectedFields({
                            ...selectedFields,
                            [item.field]: true,
                          });
                        } else {
                          const newFields = selectedFields;
                          newFields[item.field] = false;
                          setSelectedFields({
                            ...selectedFields,
                            [item.field]: false,
                          });
                          removeSidebarParams(item.field);
                        }
                      }}
                    />
                    <label style={{ paddingLeft: "5px" }} htmlFor={item.field}>
                      {item.label}
                    </label>
                  </div>
                  {item.type == "string" &&
                    selectedFields &&
                    selectedFields[item.field] && (
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            handleSidebarChange(item.field, e.target.value);
                          }}
                          value={
                            getSidebarValue(item.field)
                              ? getSidebarValue(item.field)
                              : ""
                          }
                        />
                      </div>
                    )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SidebarFilter;
