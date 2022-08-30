import { mount, shallowMount } from "@vue/test-utils";

const Component = {
    template: `
    <nav>
      <a id="defaultLink" href="/link">default</a>
      <a v-if="boo" id="boo" href="/boo">boo</a>
    </nav>
  `,
    data() {
        return {
            boo: false,
        };
    },
};

describe("v-if testing", () => {
    //測試預設連結是否存在
    test("default exist", () => {
        const wrapper = mount(Component);
        const link = wrapper.get("#defaultLink");
        expect(link.text()).toBe("default");
    });
    //當boo為false時 boo的連結不應該存在
    test("v-if boo = false ", () => {
        const wrapper = mount(Component);
        expect(wrapper.find("#boo").exists()).toBe(false);
    });
    //當boo為true時 boo的連結應該存在
    test("v-if boo = true ", () => {
        const wrapper = mount(Component, {
            data() {
                return {
                    boo: true,
                };
            },
        });
        expect(wrapper.find("#boo").exists()).toBe(true);
    });
});
