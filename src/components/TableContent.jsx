import React from "react";
import styles from "./TableContent.module.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function TableContent() {
  const [showDatalist, setShowDatalist] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [queuing, setQueuing] = useState(false);
  const [showQueueSuccess, setShowQueueSuccess] = useState(false);
  const [rows, setRows] = useState([{}, {}, {}, {}]);
  const [allSelected, setAllSelected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addNewRow = () => {
    setRows(rows.concat({})); // Add a new empty object representing a row
  };

  const toggleDatalist = () => {
    setShowDatalist(!showDatalist);
  };

  const handleSelectAll = () => {
    setAllSelected((prevState) => !prevState);
  };
  const handleDeleteAll = () => {
    setRows([]);
    setAllSelected(false);
  };

  const handlePlayClick = (index) => {
    // Simulate a process being queued
    setQueuing(true);
    setTimeout(() => {
      setQueuing(false);
      setShowQueueSuccess(true);
      setTimeout(() => {
        setShowQueueSuccess(false);
      }, 2000); 
    }, 2000); 
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <span className={styles.heading}>
            Copy of: Get Email and Phone Number from Name and Company
          </span>
          <FontAwesomeIcon icon={faSearch} />
          <span className={styles.search}>
            {" "}
            {/* <FontAwesomeIcon icon={faSearch} /> */}
            <input type="text" placeholder="search" />
            <Button variant="text" style={{ color: "black" }}>
             Search
            </Button>
          </span>
          <span className={styles.action}>
          
            <Button onClick={toggleDatalist} style={{ color: "black" }}  >

              Actions
              <i class="fa-solid fa-caret-down"></i>
            </Button>
           
            {showDatalist && (
              <div className={styles.actionstyles}>
                <Button variant="text" style={{ color: "black" }}>
                  Find People
                </Button>
                <Button variant="text" style={{ color: "black" }}>
                  Draft Email
                </Button>
                <Button variant="text" style={{ color: "black" }}>
                  create Smartlead Campaign
                </Button>
              </div>
            )}
          </span>
          <span className={styles.enrichData}>
            <Button variant="contained" style={{ color: "black" }}>
            <i class="fa-solid fa-bolt"></i>
              Enrich Data
            </Button>
          </span>
        </div>

        <div className={styles.uparmain}>
          <span className={styles.default}>
            <Button variant="text" style={{ color: "black" }}>
              Default view
            </Button>
          </span>
          <span className={styles.rows}>
            <Button variant="text" style={{ color: "black" }}>
            <i class="fa-solid fa-list-ul"></i> 
              {rows.length}/{rows.length} Rows
            </Button>
          </span>
          <span className={styles.columns}>
            <Button variant="text" style={{ color: "black" }}>
            <i class="fa-solid fa-table-columns"></i>
              16/21 Columns
            </Button>
          </span>
          <span className={styles.filter}>
            <Button variant="text" style={{ color: "black" }}>
            <i class="fa-solid fa-filter"></i>
              Filter
            </Button>
          </span>
          <span className={styles.Sort}>
            <Button variant="text" style={{ color: "black" }}>
            <i class="fa-solid fa-up-down"></i> 
              Sort
            </Button>
          </span>
        </div>
        <div className={styles.mainContent}>
          <table>
            <tr className={styles.tr}>
              <td>
                {" "}
                <Button onClick={handleSelectAll} variant="text">
                  select all
                </Button>
              </td>
              <th>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Add Person Name 👇
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <input type="text" />
                  <MenuItem onClick={handleClose} disableRipple>
                    Text
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Edit Column
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Duplicate
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert left
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert right
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort A-Z
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort Z-A
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                    Delete
                  </MenuItem>
                </Menu>
              </th>
              <th>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Add Comapany Name 👇
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <input type="text" />
                  <MenuItem onClick={handleClose} disableRipple>
                    Text
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Edit Column
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Duplicate
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert left
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert right
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort A-Z
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort Z-A
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                    Delete
                  </MenuItem>
                </Menu>
              </th>
              <th>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Add Job Title 👇
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <input type="text" />
                  <MenuItem onClick={handleClose} disableRipple>
                    Text
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Edit Column
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Duplicate
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert left
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert right
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort A-Z
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort Z-A
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                    Delete
                  </MenuItem>
                </Menu>
              </th>
              <th>
                <Button>
                  Get Domain From Company
                  <PlayArrowIcon onClick={() => handlePlayClick(1)} />
                </Button>
                {queuing && <CircularProgress size={24} />}
                {showQueueSuccess && <CheckCircleOutlineIcon />}
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <input type="text" />
                  <MenuItem onClick={handleClose} disableRipple>
                    Text
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Edit Column
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Duplicate
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert left
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert right
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort A-Z
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort Z-A
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                    Delete
                  </MenuItem>
                </Menu>
              </th>
              <th>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Domain👇
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <input type="text" />
                  <MenuItem onClick={handleClose} disableRipple>
                    Text
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Edit Column
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Duplicate
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert left
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Insert right
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort A-Z
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    sort Z-A
                  </MenuItem>

                  <MenuItem onClick={handleClose} disableRipple>
                    Delete
                  </MenuItem>
                </Menu>
              </th>
            </tr>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`${styles.tr} ${
                    allSelected ? styles.selectedRow : ""
                  }`}
                >
                  <td>{index + 1}</td>
                  <td className={allSelected ? styles.selectedRow : ""}>
                    <input type="text" className={styles.inpt} />
                  </td>
                  <td className={allSelected ? styles.selectedRow : ""}>
                    <input type="text" className={styles.inpt} />
                  </td>
                  <td className={allSelected ? styles.selectedRow : ""}>
                    <input type="text" className={styles.inpt} />
                  </td>
                  <Button className={allSelected ? styles.selectedRow : ""}>
                    <PlayArrowIcon onClick={() => handlePlayClick(1)} />
                  </Button>
                  {queuing && <CircularProgress size={24} />}
                  {showQueueSuccess && <CheckCircleOutlineIcon />}
                  <td className={allSelected ? styles.selectedRow : ""}>
                    <input type="text" className={styles.inpt} />
                  </td>
                </tr>
              ))}
            </tbody>
            {allSelected && (
              <tfoot>
                <tr className={styles.tr}>
                  <td colSpan="100%">
                    {" "}
                    {/* Span across all columns */}
                    <Button
                      onClick={handleDeleteAll}
                      variant="contained"
                      color="secondary"
                    >
                      Delete All Selected
                    </Button>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>

          <Button
            onClick={addNewRow}
            variant="text"
            style={{ color: "black" }}
            className={styles.newrow}
          >
            New row
            <i className="fa-solid fa-plus"></i> 
          </Button>
        </div>
        <div className={styles.footer}>
          <Button onClick={addNewRow} variant="text" style={{ color: "black" }}>
          <i className="fa-solid fa-plus"></i> 
            New row
          </Button>
          <Button variant="text" style={{ color: "black" }}>
          <i className="fa-solid fa-upload"></i>
            Import
          </Button>
          <Button variant="text" style={{ color: "black" }}>
          <i className="fa-solid fa-file-export"></i>
            Export
          </Button>
          <Button variant="text" style={{ color: "black" }} onClick={togglePopup}>
          <i className="fas fa-share"></i>
            Share
          </Button>
          {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={togglePopup}>&times;</span>
            <h4> Make your columns, input mappings, and first row of data visible to anyone by sharing this table as a template.</h4>
            <p>This is the content of the share window.</p>
          </div>
        </div>
      )}
        </div>
      </div>
    </>
  );
}
