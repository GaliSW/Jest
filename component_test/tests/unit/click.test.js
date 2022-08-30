import { mount } from "@vue/test-utils";
import { ref } from "vue";

const Component = {
    template: `
    <div>
      <button data-test="button" @click="increment">Increment</button>
      <p data-test="count">{{count}}</p>
    </div>
  `,
    setup() {
        const count = ref(0);
        const increment = () => {
            count.value += 1;
        };

        return {
            count,
            increment,
        };
    },
};

test("button exist", () => {
    const wrapper = mount(Component);

    expect(wrapper.get("[data-test='button']").exists()).toBe(true);
});

test("count initial = 0", () => {
    const wrapper = mount(Component);

    expect(wrapper.get("[data-test='count']").text()).toBe("0");
});

test("after clicked count change to 1 ", async () => {
    const wrapper = mount(Component);

    await wrapper.get("[data-test='button']").trigger("click");

    expect(wrapper.get("[data-test='count']").text()).toBe("1");
});
