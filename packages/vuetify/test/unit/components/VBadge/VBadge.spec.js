import VBadge from '@/components/VBadge'
import { test } from '@/test'
import Vue from 'vue'

test('VBadge.js', ({ mount, compileToFunctions }) => {
  it('should render component and match snapshot', async () => {
    const wrapper = mount(VBadge, {
      slots: {
        badge: [compileToFunctions('<span>content</span>')],
        default: [compileToFunctions('<span>element</span>')]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with with value=false and match snapshot', async () => {
    const wrapper = mount(VBadge, {
      propsData: {
        value: false
      },
      slots: {
        badge: [compileToFunctions('<span>content</span>')],
        default: [compileToFunctions('<span>element</span>')]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with bottom prop', () => {
    const wrapper = mount(VBadge, {
      propsData: {
        bottom: true
      }
    })

    expect(wrapper.hasClass('v-badge--bottom')).toBe(true)
  })

  it('should render component with left prop', () => {
    const wrapper = mount(VBadge, {
      propsData: {
        left: true
      }
    })

    expect(wrapper.hasClass('v-badge--left')).toBe(true)
  })

  it('should render component with overlap prop', () => {
    const wrapper = mount(VBadge, {
      propsData: {
        overlap: true
      }
    })

    expect(wrapper.hasClass('v-badge--overlap')).toBe(true)
  })

  it('should render component with color prop', () => {
    const wrapper = mount(VBadge, {
      propsData: {
        color: 'green lighten-1'
      },
      slots: {
        badge: [compileToFunctions('<span>content</span>')]
      }
    })

    const badge = wrapper.find('.v-badge__badge')[0]
    expect(badge.hasClass('green')).toBe(true)
    expect(badge.hasClass('lighten-1')).toBe(true)
  })

  it('should render component with transition element', () => {
    const transitionMock = {
      name: 'transition',
      render: jest.fn()
    }

    const instance = Vue.extend()
    instance.component('transition', transitionMock)

    mount(VBadge, {
      instance
    })

    expect(transitionMock.render).toHaveBeenCalled()
  })

  it('should render component without transition element', () => {
    const transitionMock = {
      name: 'transition',
      render: jest.fn()
    }

    const instance = Vue.extend()
    instance.component('transition', transitionMock)

    mount(VBadge, {
      propsData: {
        transition: ''
      },
      instance
    })

    expect(transitionMock.render).not.toHaveBeenCalled()
  })
})
