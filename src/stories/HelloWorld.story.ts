// import { action } from '@storybook/addon-actions'
import { text } from "@storybook/addon-knobs";
import HelloWorld from "../components/HelloWorld.vue";
import markdown from "./notes/sample.md";

// コンポーネントのメタデータを記述
export default {
  title: "Test/HelloTest",
  parameters: {
    layout: "centered",
    docs: {
      extractComponentDescription: (component: any, { notes }: any) => {
        if (notes) {
          return typeof notes === "string"
            ? notes
            : notes.markdown || notes.text;
        }
        return null;
      }
    },
    notes: { markdown }
  }
};

export const HelloTest = () => ({
  components: { HelloWorld },
  template: `
    <div>
      <div>
        <HelloWorld :msg="msg" />
      </div>
    </div>
  `,
  props: {
    msg: {
      type: String,
      default: text("msg", "default text")
    }
  },
  data() {
    return {};
  },
  methods: {}
});
