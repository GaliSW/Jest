import { mount } from "@vue/test-utils";
import { reactive } from "vue";

const Component = {
    template: `
    <form data-test="form" @submit.prevent="submit">
      <input data-test="email" type="email" v-model="form.email" />

      <textarea data-test="text" v-model="form.text" />

      <select data-test="name" v-model="form.name">
        <option value="gary">Gary</option>
        <option value="nina">Nina</option>
      </select>

      <input data-test="check" type="checkbox" v-model="form.check" />

      <input data-test="gender.male" type="radio" value="male" v-model="form.gender" />
      <input data-test="gender.female" type="radio" value="female" v-model="form.gender" />

      <button type="submit">Submit</button>
    </form>
  `,
    emits: ["submit"],
    setup(props, { emit }) {
        const form = reactive({
            email: "",
            text: "",
            name: "",
            check: false,
            gender: "",
        });

        const submit = () => {
            emit("submit", form);
        };

        return {
            form,
            submit,
        };
    },
};

test("form value test", async () => {
    const wrapper = mount(Component);

    const email = "gary@mail.com";
    const text = "Tibame";
    const name = "gary";
    const check = true;

    await wrapper.get('[data-test="email"]').setValue(email);
    await wrapper.get('[data-test="text"]').setValue(text);
    await wrapper.get('[data-test="name"]').setValue(name);
    await wrapper.get('[data-test="check"]').setValue();
    await wrapper.get('[data-test="gender.male"]').setValue();

    await wrapper.get('[data-test="form"]').trigger("submit.prevent");

    //form value test
    expect(wrapper.vm.form).toEqual({
        email,
        text,
        name,
        check,
        gender: "male",
    });

    //emit test
    console.log(wrapper.emitted("submit"));
    expect(wrapper.emitted("submit")[0][0]).toEqual({
        email,
        text,
        name,
        check,
        gender: "male",
    });
});
