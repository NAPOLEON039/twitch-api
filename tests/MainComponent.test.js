import Vue from 'vue';
import { mount } from '@vue/test-utils';
import MainComponent from '../src/components/MainComponent';

describe('Test for MainComponent', () => {
    const showAllUsersStub = jest.fn();
    const showOnlineUsersStub = jest.fn();
    const showOfflineUsersStub = jest.fn();
    let wrapper = mount(MainComponent);
    wrapper.setMethods({
        showAllUsers: showAllUsersStub,
        showOnlineUsers: showOnlineUsersStub,
        showOfflineUsers: showOfflineUsersStub
    });
    // it('showOfflineUsers should be called', () => {
    //     wrapper.find('#offline').trigger('change');
    //     expect(showOfflineUsersStub).toBeCalled();
    // });
    it('showAllUsers function should be called', () => {
        wrapper.find('#all').trigger('change');
        expect(showAllUsersStub).toBeCalled();
    });
    it('showOnlineUsers should be called', () => {
        wrapper.find('#online').trigger('change');
        expect(showOnlineUsersStub).toBeCalled();
    });
});