import React from "react";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Card, CardContent, Typography } from "@mui/material";
import { Radar } from "react-chartjs-2";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler);

export default function CharSheet({ sheet }) {
  return (
    <Card
      style={{ backgroundColor: "white", margin: 20 }}
      sx={{ width: 500 }}
      className="chart-container"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 25 }}
          align="center"
          color="black"
        >
          {sheet.charName}
        </Typography>
        <Typography
          sx={{ fontSize: 15 }}
          align="center"
          color="black"
        >
          {`${sheet.charRace} ${sheet.charClass}`}
        </Typography>
        <Radar
          data={{
            labels: ["STR", "CON", "CHA", "INT", "WIS", "DEX"],
            datasets: [
              {
                data: [
                  sheet.str,
                  sheet.con,
                  sheet.cha,
                  sheet.int,
                  sheet.wis,
                  sheet.dex,
                ],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            scales: {
              r: {
                angleLines: {
                  display: false,
                },
                suggestedMin: 0,
                suggestedMax: 20,
              },
            },
          }}
        />
        <Typography
          sx={{ fontSize: 15 }}
          align="center"
          color="black"
        >
          {`Description: ${sheet.charDesc}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
