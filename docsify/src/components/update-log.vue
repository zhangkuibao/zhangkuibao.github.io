<template>
  <el-timeline>
    <template v-for="(item, prop) in showCommitMap">
      <el-timeline-item :timestamp="prop" placement="top" :key="prop">
        <el-card>
          <div
            class="card-item"
            v-for="(subItem, subProp) in item"
            :key="subProp"
          >
            <h4 class="card-item-title">{{ subProp }}</h4>
            <ul
              class="card-item-list"
              v-for="textItem in subItem"
              :key="textItem.date"
            >
              <li class="card-item-list-item">
                <span style="margin-right:20px;color:#999">{{
                  textItem.time
                }}</span>
                <span>{{ textItem.msg }}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </el-timeline-item>
    </template>
  </el-timeline>
</template>

<script>
// commit时添加【new】前缀表示是一次添加操作
// commit时添加【update】前缀表示是一次更新操作
import { Timeline, TimelineItem, Card } from "element-ui";
export default {
  components: {
    [Card.name]: Card,
    [TimelineItem.name]: TimelineItem,
    [Timeline.name]: Timeline,
  },
  name: "app-update-log",
  data() {
    return {
      commitList: [],
    };
  },
  computed: {
    showCommitMap() {
      let result = {};
      this.commitList.forEach((ele) => {
        let time = this.getFullTime(ele.date);
        let dateArr = time.split(" ");
        let date = dateArr[0];
        let type = this.extractCommitType(ele.message);
        Object.assign(ele, {
          msg: this.extractCommitMessage(ele.message),
          time: dateArr[1],
        });
        if (result[date]) {
          result[date][type]
            ? result[date][type].unshift(ele)
            : (result[date][type] = [ele]);
        } else {
          result[date] = {
            [type]: [ele],
          };
        }
      });
      return result;
    },
  },
  methods: {
    extractCommitMessage(msg) {
      return msg.replace(/【(.*?)】/g, "");
    },
    extractCommitType(msg) {
      let match = /【(.*?)】/g.exec(msg);
      let type = match?.[1];
      switch (type) {
        case "update":
          return "更新文档";
        case "new":
          return "新增文档";
        case "delete":
          return "删除文档";
        default:
          return "优化";
      }
    },
    getCommitLog() {
      fetch("./docsify/src/assets/commit.json").then((res) => {
        res.json().then((json) => {
          this.commitList = json;
          console.log(this.showCommitMap);
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
