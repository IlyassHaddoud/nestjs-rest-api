import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      birthdate: '1990-05-15',
      role: 'user',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      birthdate: '1988-12-03',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Bob Jones',
      email: 'bob.jones@example.com',
      birthdate: '1995-08-22',
      role: 'user',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      birthdate: '1992-04-10',
      role: 'user',
    },
    {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      birthdate: '1987-11-28',
      role: 'admin',
    },
    {
      id: 6,
      name: 'Emma White',
      email: 'emma.white@example.com',
      birthdate: '1998-09-17',
      role: 'user',
    },
    {
      id: 7,
      name: 'David Miller',
      email: 'david.miller@example.com',
      birthdate: '1993-06-05',
      role: 'user',
    },
    {
      id: 8,
      name: 'Olivia Taylor',
      email: 'olivia.taylor@example.com',
      birthdate: '1996-02-14',
      role: 'admin',
    },
    {
      id: 9,
      name: 'Samuel Wilson',
      email: 'samuel.wilson@example.com',
      birthdate: '1991-07-31',
      role: 'user',
    },
    {
      id: 10,
      name: 'Grace Harris',
      email: 'grace.harris@example.com',
      birthdate: '1989-10-20',
      role: 'user',
    },
  ];

  findAll(role?: 'user' | 'admin') {
    if (role) {
      return this.users.filter((user) => user.role == role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id == id);
  }

  create(user: {
    name: string;
    email: string;
    birthdate: string;
    role: 'user' | 'admin';
  }) {
    const lastId = this.users.sort((a, b) => b.id - a.id)[0].id;
    this.users.push({ id: lastId + 1, ...user });
    return this.users.sort((a, b) => a.id - b.id);
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      birthdate?: string;
      role?: 'user' | 'admin';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id == id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
  }

  delete(id: number) {
    return this.users.filter((user) => user.id != id);
  }
}
