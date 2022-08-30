import { mount } from "@vue/test-utils";

const Component = {
    template: `
    <div id="test"  v-show="display" ></div>
  `,
    data() {
        return {
            display: false,
        };
    },
};

test("can't show the div", () => {
    const wrapper = mount(Component);

    expect(wrapper.get("#test").isVisible()).toBe(false);
});

test("must show the div", () => {
    const wrapper = mount(Component, {
        data() {
            return {
                display: true,
            };
        },
    });

    expect(wrapper.get("#test").isVisible()).toBe(true);
});
