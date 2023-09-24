import AppInit from '../src/AppInit'
import express from 'express';
describe("Tests the app initializer", () => {
    let instance: AppInit;
    let mockListen: jest.Mock;

    beforeEach(() => {
        instance = new AppInit({port:5000});
        mockListen = jest.fn();

        instance.app = {...express(), listen: mockListen} as any;
    })

    it("Should start the server with a provided port", () => {
        instance.runServer();

        const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
        mockListen.mock.calls[0][1]();
        expect(consoleLogSpy).toHaveBeenCalledWith(`Server running on 5000`);
        consoleLogSpy.mockRestore();
    })
})