const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jay',
            room: 'Node'
        },{
            id: '2',
            name: 'Abhinav',
            room: 'React'
        },{
            id: '3',
            name: 'Shreshth',
            room: 'Node'
        }];
    });
    
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Jay',
            room: 'The Room',
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();
    });

    it('should return names for Node', () => {
        var userList = users.getUserList('Node');
        expect(userList).toEqual(['Jay', 'Shreshth']);
    });

    it('should return names for React', () => {
        var userList = users.getUserList('React');
        expect(userList).toEqual(['Abhinav']);
    });
});