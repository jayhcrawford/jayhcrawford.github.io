import * as d3 from "https://esm.sh/d3";

const url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

const w = 900;
const h = 500;

const svg = d3
  .select("#chartHTML")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

const formatYear = d3.utcFormat("%Y");

const tooltip = d3
  .select("#chartHTML")
  .append("div")
  .attr("id", "tooltip")
  .attr("style", "position: absolute; opacity: 0;");


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const incomingData = data;
    const cyclistTimes = incomingData.map((d) => d["Time"]);
    const performanceYear = incomingData.map((d) => d["Year"]);
    const yearRange = [d3.min(performanceYear), d3.max(performanceYear)];
    const cycTimeRange = [d3.min(cyclistTimes), d3.max(cyclistTimes)];

    const x = d3.scaleUtc(
      [
        new Date(`${yearRange[0] - 1}`, 0, 1),
        new Date(`${yearRange[1] + 1}`, 0, 1)
      ],
      [60, 760]
    );

    //For the sake of one 36-39 minute segment of time, this app treats all Y-data like a short period of time from single day in the year 2000.
    const y = d3.scaleUtc(
      [
        new Date(`2000-01-01T01:36:40Z`),
        new Date(`2000-01-01T01:${cycTimeRange[1]}Z`)
      ],
      [0, 400]
    );

    svg
      .selectAll("rect")
      .data(incomingData)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("style", (d) => {
        if (d["Doping"] === "") {
          return "fill: rgb(64,64,64)";
        } else {
          return "fill: red";
        }
      })
      .attr("cx", (d) => {
        return x(new Date(`${d["Year"]}`, 0, 1));
      })
      .attr("cy", (d) => {
        return y(new Date(`2000-01-01T01:${d["Time"]}Z`));
      })
      .attr("r", 10)
      .attr("data-xvalue", (d) => d["Year"])
      .attr("data-yvalue", (d) => {
        return new Date(`2000-01-01T01:${d["Time"]}Z`);
      })
      .attr("cyc-name", (d) => d["Name"])
      .attr("cyc-time", (d) => d["Time"])
      .attr("cyc-nationality", (d) => d["Nationality"])
      .attr("cyc-doping", (d) => {
        if (d["Doping"] === "") {
          return "clean";
        } else {
          return "doper";
        }
      });

    d3.selectAll(".dot")
      .on("mouseover", function (event, d) {
        d3.select(this).style("cursor", "pointer").style("opacity", 1);
        tooltip
          .attr("style", "opacity: 1;")
          .html(
            `Name: <b> ${d3.select(this).attr("cyc-name")} </b> <br>
             Time: ${d3.select(this).attr("cyc-time")} <br>
             Nationality: ${d3.select(this).attr("cyc-nationality")} <br>
             Year: ${formatYear(new Date(d3.select(this).attr("data-xvalue")))}`
          )
          .attr("data-year", d3.select(this).attr("data-xvalue"))
          .style("top", `${event.pageY + 10}px`)
          .style("left", `${event.pageX + 20}px`)
          .style("background-color", (d) => {
          if (d3.select(this).attr("cyc-doping") === "doper") {
            return "pink"
          } else {
            return "rgb(248,248,248)"
          }
        });
      })
      .on("mouseout", function (event, d) {
      d3.select(this).style("opacity", .2)

      if (d3.select(this).attr("cyc-doping") === "doper") {
         d3.select(this).style("fill", "red");
      } else {
        d3.select(this).style("fill", "rgb(64,64,64)");
      }

        d3.select("#tooltip")
          .style("opacity", 0)
          .style("top", `0px`)
          .style("left", `0px`);
      });

    const gx = svg
      .append("g")
      .attr("transform", `translate(0,400)`)
      .call(d3.axisBottom(x))
      .attr("id", "x-axis");

    const gy = svg
      .append("g")
      .attr("transform", `translate(60,0)`)
      .call(d3.axisLeft(y).ticks(15, "%M:%S"))
      .attr("id", "y-axis");
  });
