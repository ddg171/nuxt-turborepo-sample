import {describe,it, expect} from "vitest"
import {mount} from "@vue/test-utils"

import AppButton from "@/components/Button.vue"

describe("UI button",()=>{
  it("render the button",()=>{
    const wrapper = mount(AppButton)
    expect(wrapper).toBeDefined()
  })

    it("can be disabled with a prop",()=>{
    const wrapper = mount(AppButton,{
      propsData:{
        disabled:true
      }
    })
    expect(wrapper.html()).toContain('disabled');
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(true);
  })
      it("can be changed variant with a prop",()=>{
    const wrapper = mount(AppButton,{
      propsData:{
        variant:"danger"
      }
    })
    expect(wrapper.html()).toContain('variant="danger"');
  })      
  it("can use slot",()=>{
    const wrapper = mount(AppButton,{
      slots:{default:"hoge"}
    })
    const button = wrapper.find("button");

    expect(button.element.textContent).toBe('hoge');
  })
  it("click event",()=>{
    const wrapper = mount(AppButton)
    const button = wrapper.find("button");
    button.trigger("click")

    expect((wrapper.emitted()["click:app-button"][0] as Array<Array<string>>)[0]).toBe('hoge');
  })
})
