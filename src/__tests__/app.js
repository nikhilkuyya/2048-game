import { shallowMount } from "@vue/test-utils"
import App from "../App"
test("it rendered", () => {
  const wrapper = shallowMount(App)
  expect(wrapper).toBeTruthy()
})
