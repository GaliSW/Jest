import { mount } from "@vue/test-utils";
import { ref } from "vue";

const Component = {
    template: `
    <div>
      <button data-test="button" @click="increment">Increment</button>
    </div>
  `,
    emits: ["increment"],
    setup(props, context) {
        const count = ref(0);
        const increment = () => {
            count.value += 1;
            context.emit("increment", count.value);
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

test("count initial =  0", () => {
    const wrapper = mount(Component);

    expect(wrapper.vm.count).toBe(0);
});

test("emits an event when clicked", async () => {
    const wrapper = mount(Component);

    await wrapper.get('[data-test="button"]').trigger("click");

    expect(wrapper.emitted()).toHaveProperty("increment");
    console.log(wrapper.emitted());
});

test("after clicked it will emit value 1", async () => {
    const wrapper = mount(Component);

    await wrapper.get('[data-test="button"]').trigger("click");

    const incrementEvent = wrapper.emitted("increment");

    expect(incrementEvent[0]).toEqual([1]);
});
