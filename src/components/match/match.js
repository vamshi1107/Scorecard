import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./match.css";

export default () => {
  const params = useParams();
  const [match, setMatch] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("http://localhost:1107/matches/" + params.id);
    const data = res.data;
    setMatch({ ...data });
  };

  const isNotEmpty = (obj) => {
    return Object.keys(obj).length > 0;
  };

  return (
    <div>
      {isNotEmpty(match) ? (
        <div className="match-con">
          <div className="match-head">
            <div className="match-tscore">
              {match.t1Name}({match.t1Score})
            </div>
            <div className="match-tscore">
              {match.t2Name}({match.t2Score})
            </div>
            <div className="match-result">{match.result}</div>
          </div>
          <div className="match-content">
            {match.scorecard.map((score, index) => (
              <div>
                <div className="match-in-team">{score.team}</div>
                <table className="match-in-score">
                  <tr>
                    <th>Batter</th>
                    <th></th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>Fours</th>
                    <th>Sixes</th>
                    <th>SR</th>
                  </tr>
                  {score.batting.map((s) => (
                    <tr>
                      <td>{s.player}</td>
                      <td>{s.status}</td>
                      <td>{s.runs}</td>
                      <td>{s.balls}</td>
                      <td>{s.fours}</td>
                      <td>{s.sixes}</td>
                      <td>{s.sr}</td>
                    </tr>
                  ))}
                </table>
                <table className="match-in-score">
                  <tr>
                    <th>Bowler</th>
                    <th>Overs</th>
                    <th>Maiden</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                    <th>Econ</th>
                    <th>Wides</th>
                    <th>NoBalls</th>
                  </tr>
                  {score.bowling.map((s) => (
                    <tr>
                      <td>{s.player}</td>
                      <td>{s.overs}</td>
                      <td>{s.maiden}</td>
                      <td>{s.runs}</td>
                      <td>{s.wickets}</td>
                      <td>{s.econ}</td>
                      <td>{s.wides}</td>
                      <td>{s.noBalls}</td>
                    </tr>
                  ))}
                </table>
                <div className="total">
                  <div>Total</div>
                  <div>{index == 0 ? match.t1Score : match.t2Score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="match-con">Match Not found</div>
      )}
    </div>
  );
};
