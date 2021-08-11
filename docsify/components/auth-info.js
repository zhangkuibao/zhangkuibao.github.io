class AuthorInfoComponent {
  name = "author-info";

  template = `
  <div style="color: #567;">
    <p v-if="false">作者：{{author}}</p>
    <p>最后更新日期：{{date}}</p>
  </div>`;

  props = ["date"];

  data = function () {
    return {
      author,
    };
  };
}
