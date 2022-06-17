<template>
  <footer class="footer">
    <div class="footer-left-wrap">
      <ul v-if="contact" class="contact">
        <li
          v-for="item in contact"
          :key="item.iconComponent"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>

    <div class="footer-right-wrap">
      <ul v-if="copyright" class="copyright">
        <li v-for="item in copyright" :key="item.text" class="copyright-item">
          <NavLink v-if="item.link" :link="item.link">{{ item.text }}</NavLink>
          <template v-else>{{ item.text }}</template>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { GithubIcon, MailIcon } from "vue-feather-icons";
import CsdnIcon from "./icon/CsdnIcon.vue";
import GiteeIcon from "./icon/GiteeIcon.vue";

export default {
  components: {
    GithubIcon,
    MailIcon,
    CsdnIcon,
    GiteeIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
            type,
          };
        })
        .filter(({ iconComponent }) => iconComponent);
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      );
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case "codepen":
          return "CodepenIcon";
        case "codesandbox":
          return "CodesandboxIcon";
        case "facebook":
          return "FacebookIcon";
        case "github":
          return "GithubIcon";
        case "gitlab":
          return "GitlabIcon";
        case "instagram":
          return "InstagramIcon";
        case "linkedin":
          return "LinkedinIcon";
        case "mail":
          return "MailIcon";
        case "messenger":
          return "MessageSquareIcon";
        case "music":
          return "MusicIcon";
        case "phone":
          return "PhoneIcon";
        case "twitter":
          return "TwitterIcon";
        case "video":
          return "VideoIcon";
        case "web":
          return "GlobeIcon";
        case "youtube":
          return "YoutubeIcon";
        case "CSDN":
          return "CsdnIcon";
        case "gitee":
          return "GiteeIcon";
        default:
          return "";
      }
    },
  },
  mounted() {
    console.log(8888, this.contact);
  },
};
</script>

<style lang="stylus" scoped>
ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer {
  min-height: 60px;
  box-sizing: border-box;
  background-color: $footerBgColor;
  display: flex;
  padding: 15px 32px;

  .footer-left-wrap {
    line-height: 30px;
    flex: 1;
    display: flex;

    .contact {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .contact-item {
        margin-right: 10px;
        display: flex;
        align-items: center;

        a {
          font-size: 12px;
          color: $footerColor;
          text-decoration: none;
          transition: color 0.3s;
          display: flex;
          align-items: center;

          &:hover {
            color: #FFF;
          }
        }
      }
    }
  }

  .footer-right-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: $MQNarrow) {
      justify-content: flex-end;
    }

    .copyright {
      display: flex;
      justify-content: flex-end;

      .copyright-item {
        flex: 0 0 auto;
        padding: 0 10px;
        position: relative;
        line-height: 12px;
        border-right: 1px solid $footerColor;
        font-size: 12px;
        color: $footerColor;

        &:last-child {
          border-right: none;
        }

        a {
          color: currentColor;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .footer {
    min-height: 100px;
    flex-direction: column;

    .footer-left-wrap {
      align-items: center;
      justify-content: center;
    }

    .footer-right-wrap {
      .copyright {
        display: block;

        .copyright-item {
          line-height: 1;
          border-right: none;
          text-align: center;
        }
      }
    }
  }
}
</style>
