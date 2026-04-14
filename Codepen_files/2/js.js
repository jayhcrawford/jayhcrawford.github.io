const margin = { top: 50, right: 30, bottom: 50, left: 70 };
const width = 900 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const formatYear = d3.utcFormat("%Y");

const svg = d3
  .select("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const tooltip = d3
  .select("body")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 1)
  .attr("style", "position: absolute; opacity: 1;");

fetch(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    const incData = data.data;
    const gdps = incData.map((d) => d[1]);
    const dates = incData.map((d) => new Date(d[0]));

    const x = d3
      .scaleUtc()
      .domain([d3.min(dates), d3.max(dates)])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(gdps)])
      .range([height, 0]);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .attr("id", "x-axis")
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(0,${0})`)
      .attr("id", "y-axis")
      .call(d3.axisLeft(y));

    svg
      .selectAll("rect")
      .data(incData)
      .enter()
      .append("rect")
      .attr("fill", "rgb(105,105,105)")
      .attr("class", "bar")
      .attr("x", (d) => x(new Date(d[0])))
      .attr("y", (d) => y(d[1]))
      .attr("width", `${width / incData.length - 0}px`)
      .attr("height", (d) => height - y(d[1]))
      .attr("data-date", (d) => d[0])
      .attr("data-gdp", (d) => d[1])
      .attr("index", (d, i) => i)
      .on("mouseover", function (event, d) {
        tooltip
          .html(`Year: ${formatYear(new Date(d[0]))} <br> GDP: ${d[1]}`)
          .style("top", `${event.pageY + 10}px`)
          .style("left", `${event.pageX + 20}px`)
          .style("display", "block")
          .style("opacity", 1)
          .attr("data-date", d[0]);
      })
      .on("mouseout", function (event, d) {
        tooltip
          .style("top", `0px`)
          .style("left", `0px`)
          .style("opacity", 0)
          .html("");
      });
  });
