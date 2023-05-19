import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./matches.css";

export default () => {
  const [matches, setMatches] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("http://localhost:1107/matches");
    const d = res.data;
    setMatches([...d].reverse());
    setData([...d].reverse());
  };

  const search = (e) => {
    const term = e.target.value;
    const result = data.filter(
      (e) =>
        e.t1Name.toLowerCase().startsWith(term.toLowerCase()) ||
        e.t2Name.toLowerCase().startsWith(term.toLowerCase())
    );
    setMatches([...result]);
  };

  return (
    <div>
      <div className="m-title">Matches</div>
      <div className="spacer"></div>
      <div className="search">
        <input placeholder="Search" onChange={search}></input>
      </div>
      <div className="matches">
        {matches.map((e, i) => (
          <Link to={"/match/" + e.id} key={i} className="match">
            <div className="inner">
              <div className="m-date">{e.date}</div>
              <div className="t-score">
                <div className="t-name"> {e.t1Name}</div>
                <div className="t-s">{e.t1Score}</div>
              </div>
              <div className="t-score">
                <div className="t-name">{e.t2Name}</div>
                <div className="t-s">{e.t2Score}</div>
              </div>
              <div className="m-result">{e.result}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
