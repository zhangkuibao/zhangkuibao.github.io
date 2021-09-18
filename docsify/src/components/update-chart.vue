<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
export default {
  name: "update-chart",
  props: ["list"],
  data() {
    return {
      maxCommitCount: 0, // 最大提交数
      myChart: null,
    };
  },
  watch: {
    list() {
      if (this.list) {
        this.updateChart();
      }
    },
    // option() {
    //   this.updateChart();
    // },
  },
  computed: {
    continueList() {
      // 计算连续更新天数
      let continueList = [1];
      this.seriesData.forEach((ele, index) => {
        if (index < this.seriesData.length - 2) {
          let dateDiffNum = this.dateDiff(
            ele[0],
            this.seriesData[index + 1][0]
          );
          if (dateDiffNum === 1) {
            // 连续
            continueList[continueList.length - 1]++;
          } else {
            continueList.push(1);
          }
        }
      });
      return continueList;
    },
    totalInfo() {
      return {
        totalDays: this.seriesData.length,
        longContinueDays: Math.max(...this.continueList),
        lastContinueDays: this.continueList[0],
      };
    },
    calendarRange() {
      if (this.seriesData.length === 0) return [];
      return [
        this.getFullTime(Date.now()),
        this.seriesData[this.seriesData.length - 1][0],
      ];
    },
    seriesData() {
      return Object.entries(this.dateMap);
    },
    dateMap() {
      let dateMap = {};
      this.maxCommitCount = 0;
      this.list.forEach((ele, index) => {
        let date = this.getFullTime(ele.date);
        if (dateMap[date] === undefined) {
          dateMap[date] = 0;
        }
        dateMap[date]++;
        this.maxCommitCount = Math.max(this.maxCommitCount, dateMap[date]);
      });
      return dateMap;
    },
    option() {
      return {
        title: {
          top: 0,
          text: "更新日历",
          left: "center",
          textStyle: {
            color: "#3C4858",
          },
        },
        graphic: {
          elements: [
            {
              type: "group",
              bottom: "60",
              left: "center",
              children: [
                {
                  type: "text",
                  style: {
                    text: `总更新天数：${this.totalInfo.totalDays} 天`,
                  },
                },
                {
                  type: "text",
                  left: "200px",
                  style: {
                    text: `最长连续更新天数：${this.totalInfo.longContinueDays} 天`,
                  },
                },
                {
                  type: "text",
                  left: "400px",
                  style: {
                    text: `最近连续更新天数：${this.totalInfo.lastContinueDays} 天`,
                  },
                },
              ],
            },
          ],
        },
        tooltip: {
          padding: 10,
          backgroundColor: "#eee",
          borderWidth: 0,
          formatter: function(obj) {
            var value = obj.value;
            return (
              '<div style="font-size: 14px;">' +
              value[0] +
              "：" +
              value[1] +
              "</div>"
            );
          },
        },
        // visualMap: {
        //   show: true,
        //   showLabel: true,
        //   categories: [0, 1, 2, 3, 4],
        //   calculable: true,
        //   inRange: {
        //     symbol: "rect",
        //     color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
        //   },
        //   itemWidth: 12,
        //   itemHeight: 12,
        //   orient: "horizontal",
        //   left: "center",
        //   bottom: 0,
        // },
        visualMap: {
          min: 0,
          max: 20,
          calculable: true,
          orient: "horizontal",
          right: "center",
          bottom: "bottom",
          inRange: {
            symbol: "rect",
            color: ["#d6e685", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
          },
        },
        calendar: [
          {
            left: "center",
            range: this.calendarRange,
            cellSize: 18,
            splitLine: {
              show: false,
            },
            itemStyle: {
              width: "30px",
              height: "30px",
              color: "#EEEEEE",
              borderColor: "#FFF",
              borderWidth: 2,
            },
            yearLabel: {
              show: false,
            },
            monthLabel: {
              nameMap: "cn",
              fontWeight: "lighter",
              fontSize: 12,
            },
            dayLabel: {
              show: true,
              formatter: "{start}  1st",
              fontWeight: "lighter",
              nameMap: ["周日", "周一", " ", " ", "周四", " ", " "],
              fontSize: 12,
              firstDay: 1,
            },
          },
        ],
        series: [
          {
            type: "heatmap",
            coordinateSystem: "calendar",
            calendarIndex: 0,
            data: this.seriesData,
          },
        ],
      };
    },
  },
  methods: {
    findTitleByDate(date) {
      let domList = document.querySelectorAll(".el-timeline-item__timestamp");
      for (let index = 0; index < domList.length; index++) {
        let item = domList[index];
        if (item.innerText === date) {
          return item;
        }
      }
    },
    initChart() {
      this.myChart = echarts.init(this.$refs.chart);
    },
    updateChart() {
      this.myChart.setOption(this.option);
    },
    bindResizeEvent() {
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    UnboundResizeEvent() {
      window.removeEventListener("resize", this.myChart.resize);
    },
    getFullTime(dateStr) {
      let date = new Date(dateStr), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + "",
        M =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1,
        D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
        h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        m =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return `${Y}-${M}-${D}`;
    },
    // 返回目标几天后的日期
    getDateForDiff(date, num = 1) {
      let time = new Date(date).getTime() + 60 * 60 * 24 * 1000 * num;
      return new Date(time);
    },
    dateDiff(sDate1, sDate2) {
      var date1 = new Date(sDate1);
      var date2 = new Date(sDate2);
      var iDays = parseInt(
        Math.abs(date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24
      );
      return iDays;
    },
    getElementOffset(dom) {
      var actualLeft = dom.offsetLeft;
      var actualTop = dom.offsetTop;
      var current = dom.offsetParent;
      while (current !== null) {
        actualLeft += current.offsetLeft;
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }
      return {
        left: actualLeft,
        top: actualTop,
      };
    },
    bindClickEvent() {
      this.myChart.on("click", (params) => {
        if (params.componentType !== "series") return;
        let item = this.findTitleByDate(params.data[0]);
        let offset = this.getElementOffset(item);
        window.scrollTo({ behavior: "smooth", top: offset.top - 60 });
      });
    },
  },
  mounted() {
    this.initChart();
    this.bindResizeEvent();
    this.bindClickEvent();
  },
  beforeDestroy() {
    this.UnboundResizeEvent();
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  min-height: 280px;
}
</style>
