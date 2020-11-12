import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  test('Renderiza um botão na tela', () => {
    const button = 'Clique Aqui';
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toMatch(button);
  });
});
