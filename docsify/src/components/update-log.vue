<template>
  <div>
    <el-date-picker
      v-model="currentYear"
      type="year"
      placeholder="选择年"
      value-format="yyyy"
      :clearable="false"
    />
    <update-chart :list="commitList" :currentYear="currentYear"/>
    <el-timeline>
      <template v-for="(monthMap, monthIndex) in showCommitMap">
        <h2 :key="monthIndex">{{ monthIndex }}</h2>
        <el-timeline-item
          v-for="(dayMap, dayIndex) in monthMap"
          :timestamp="dayIndex"
          placement="top"
          :key="dayIndex"
        >
          <el-card>
            <div
              class="card-item"
              v-for="(msgMap, msgIndex) in dayMap"
              :key="msgIndex"
            >
              <div class="card-item-title">{{ msgIndex }}</div>
              <ul
                class="card-item-list"
                v-for="msgItem in msgMap"
                :key="msgItem.date"
              >
                <li class="card-item-list-item">
                  <span style="margin-right: 20px; color: #999">{{
                    msgItem.time
                  }}</span>
                  <span>{{ msgItem.msg }}</span>
                </li>
              </ul>
            </div>
          </el-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>

<script>
// commit时添加【new】前缀表示是一次添加操作
// commit时添加【update】前缀表示是一次更新操作
import { Timeline, TimelineItem, Card, DatePicker } from "element-ui";
export default {
  components: {
    [Card.name]: Card,
    [TimelineItem.name]: TimelineItem,
    [Timeline.name]: Timeline,
    [DatePicker.name]: DatePicker,
  },
  name: "app-update-log",
  data() {
    return {
      commitList: [],
      currentYear: String(new Date().getFullYear()),
    };
  },
  computed: {
    showCommitMap() {
      let result = {};
      this.commitList.forEach((ele) => {
        let time = this.getFullTime(ele.date);
        let dateArr = time.split(" ");
        let date = dateArr[0];
        let yearMonth = this.extractYearMonth(date);
        let type = this.extractCommitType(ele.message);
        Object.assign(ele, {
          msg: this.extractCommitMessage(ele.message),
          time: dateArr[1],
        });
        if (result[yearMonth]) {
          if (result[yearMonth][date]) {
            result[yearMonth][date][type]
              ? result[yearMonth][date][type].unshift(ele)
              : (result[yearMonth][date][type] = [ele]);
          } else {
            result[yearMonth][date] = {
              [type]: [ele],
            };
          }
          result[yearMonth];
        } else {
          result[yearMonth] = {};
          result[yearMonth][date] = {
            [type]: [ele],
          };
        }
      });
      return result;
    },
  },
  methods: {
    extractYearMonth(dateStr) {
      let dateArr = dateStr.split("-");
      dateArr.pop();
      return dateArr.join("-");
    },
    extractCommitMessage(msg) {
      return msg.replace(/^【(.*?)】/g, "");
    },
    extractCommitType(msg) {
      let match = /^【(.*?)】/g.exec(msg);
      return match?.[1] || "优化";
    },
    getCommitLog() {
      fetch("./docsify/src/assets/commit.json").then((res) => {
        res.json().then((json) => {
          this.commitList = json;
        });
      });
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
      return `${Y}-${M}-${D} ${h}:${m}:${s}`;
    },
  },
  mounted() {
    this.getCommitLog();
  },
};
</script>

<style scoped>
.card-item-title {
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.25rem;
  box-sizing: border-box;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
