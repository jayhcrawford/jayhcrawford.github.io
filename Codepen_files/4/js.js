import * as d3 from "https://esm.sh/d3";


//These colors are used in the chart.
const color1 = "#bbbbff",
  color2 = "#fcfbfa",
  color3 = "#ffe8e2",
  color4 = "#ffa4a2",
  color5 = "#da6868";


//tooltip has a "Date: " text feature which is populated in part by returnMonth below:
const returnMonth = (int) => {
  const passThru = int;
  switch (passThru.toString()) {
    case "1":
      return 'January';
    break;
    case "2":
      return 'February';
    break;
    case "3":
      return 'March';
    break;
    case "4":
      return 'April';
    break;
    case "5":
      return 'May';
    break;
    case "6":
      return 'June';
    break;
    case "7":
      return 'July';
    break;
    case "8":
      return 'August';
    break;
    case "9":
      return 'September';
    break;
    case "10":
      return 'October';
    break;
    case "11":
      return 'November';
    break;
    case "12":
      return 'December';
    break;
  }
}

//The legend uses values in this array to populate tooltip information; values here only change HTML, no values or ranges.
const scaleArr = [1.7, 3.7, 5.8, 7.8, 9.8, 13.9];

const url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

const tooltip = d3
  .select("body")
  .append("div")
  .attr("id", "tooltip")
  .attr("opacity", "0")
  .style("position", "absolute");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const baseTemp = data["baseTemperature"],
      allData = data["monthlyVariance"];

  //returns an array of two values, the lowest base temperature, and the highest base temperature.
    const varianceDomain = (allData) => {
      let allVariances = [];
      allData.forEach((data) => {
        allVariances.push(baseTemp + data["variance"]);
      });
      return [d3.min(allVariances), d3.max(allVariances)];
    };

    //colorScale populates an array with 6 values that are evenly spaced across the range of tmperatures to correlate with colors. Five colors requires 6 values.
    const colorScale = (varianceDomain) => {
      let colorArray = [
        Math.round((varianceDomain[0] + Number.EPSILON) * 100) / 100,
        Math.round(
          (varianceDomain[0] +
            (varianceDomain[1] - varianceDomain[0]) / 6 +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round(
          (varianceDomain[0] +
            2 * ((varianceDomain[1] - varianceDomain[0]) / 6) +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round(
          (varianceDomain[0] +
            3 * ((varianceDomain[1] - varianceDomain[0]) / 6) +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round(
          (varianceDomain[0] +
            4 * ((varianceDomain[1] - varianceDomain[0]) / 6) +
            Number.EPSILON) *
            100
        ) / 100,
        Math.round((varianceDomain[1] + Number.EPSILON) * 100) / 100
      ];
      return colorArray;
    };

    //yearsDomain returns an array for the x-axis domain
    const yearsDomain = (allData) => {
      let allYears = [];
      allData.forEach((entry) => {
        allYears.push(entry["year"]);
      });
      return [new Date(`${d3.min(allYears)}`), new Date(`${d3.max(allYears)}`)];
    };

    const w = 1280;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleUtc(yearsDomain(allData), [padding, w - padding]);

    const yScale = d3
      .scaleBand()
      .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      .range([h - padding, 0]);

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    const xAxis = d3.axisBottom(xScale);
    xAxis.ticks(27, "%Y");

    const yAxis = d3.axisLeft(yScale);
    yAxis.ticks(12).tickFormat((month) => {
      const date = new Date(0);
      date.setUTCMonth(month);
      return d3.timeFormat("%B")(date);
    });

    svg
      .append("g")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis)
      .attr("id", "x-axis");

    svg
      .append("g")
      .attr("transform", `translate(${padding},0)`)
      .call(yAxis)
      .attr("id", "y-axis");

    svg
      .selectAll("rect")
      .data(allData)
      .enter()
      .append("rect")
      .attr("class", "cell")
      .attr("x", (d) => {
        //this is where d["year"] is converted into an actual date
        return xScale(new Date(d["year"].toString()));
      })
      .attr("y", (d) => {
        //this is where d["month"] is converted into an actual date
        return yScale(d["month"]);
      })
      .attr("data-year", (d) => {
        return d["year"];
      })
      .attr("data-month", (d) => {
        return d["month"] - 1;
      })
      .attr("data-temp", (d) => {
        return Math.round(baseTemp + d["variance"]);
      })
      .attr("tru-temp", (d) => {
        return (
          Math.round((baseTemp + d["variance"] + Number.EPSILON) * 100) / 100
        );
      })
      .attr("fill", (d) => {
        const localVariance = baseTemp + d["variance"];
        const colorsArray = colorScale(varianceDomain(allData));
        if (localVariance >= colorsArray[0] && localVariance < colorsArray[1]) {
          return color1;
        }
        if (localVariance <= colorsArray[2] && localVariance > colorsArray[1]) {
          return color2;
        }
        if (localVariance <= colorsArray[3] && localVariance > colorsArray[2]) {
          return color3;
        }
        if (localVariance <= colorsArray[4] && localVariance > colorsArray[3]) {
          return color4;
        }
        if (localVariance === 5) {
          return color3;
        }
        if (localVariance <= colorsArray[5] && localVariance > colorsArray[4]) {
          return color5;
        } else {
          return "pink";
        }
      })
  .on("mouseover", function (event, d) {
        d3.select(this).style("cursor", "pointer").style("opacity", 0.5);
        tooltip
          .style("opacity", ".7")
          .style("top", `${event.pageY+ -30}px`)
          .style("left", `${event.pageX + 50}px`)
          .attr("data-year", (d) => {
            return d3.select(this).attr("data-year");
          })
          .attr("data-temp", (d) => {
            return d3.select(this).attr("data-temp");
          })
          .html(
            `Month: ${returnMonth(parseInt(d3.select(this).attr('data-month')) + 1)} <br>Year: ${d3
              .select(this)
              .attr("data-year")}<br> Average Temperature: ${d3
              .select(this)
              .attr("tru-temp")}\u00B0C`
          );
      })
      .on("mouseout", function (event, d) {
        d3.select(this).style("opacity", 1);
        tooltip.style("opacity", "0").style("top", "0px").style("left", "0px");
      });;

    //fetch closure
  });

// Function to create square SVGs
function createSquareSVG(size, color) {
  const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("class", "color-sample");

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", size);
  rect.setAttribute("height", size);
  rect.setAttribute("fill", color);

  svg.appendChild(rect);
  return svg;
}

// Append 5 square SVGs to the legend
const container = document.getElementById("legend-graphic");
const size = 40; // size of the square
const color = [color1, color2, color3, color4, color5]; // color of the square

for (let i = 0; i < 5; i++) {
  const svgSquare = createSquareSVG(size, color[i]);
  svgSquare.setAttribute("scale", `${scaleArr[i]} - ${scaleArr[i + 1]}`);
  container.appendChild(svgSquare);
}


//This appends tooltip functionality to the "svg squares" in the legend.
d3.selectAll(".color-sample")
  .on("mouseover", function (event, d) {
    d3.select(this).style("cursor", "pointer");
    console.log(event.pageX);
    tooltip
      .style("opacity", ".7")
      .style("top", "670px")
      .style("left", `${event.pageX-20}px`)
      .html(`Temperature Range: ${d3.select(this).attr("scale")}\u00B0C`);
  })
  .on("mouseout", function (event, d) {
    tooltip.style("opacity", "0").style("top", "0px").style("left", "0px");
  });
