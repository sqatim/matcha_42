import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway(5050, { cors: { origin: '*' } })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  users: { userId: string; socketId: string }[];

  private logger: Logger = new Logger('AppGateway');

  private addUser = (userId: string, socketId: string) => {
    !this.users?.some((user) => user.userId === userId) &&
      this.users?.push({ userId, socketId });
  };

  private getUser = (userId: string) => {
    return this.users.find((user) => user.userId == userId);
  };

  private removeUser = (socketId: string) => {
    this.users = this.users.filter((user) => user.socketId !== socketId);
  };

  @SubscribeMessage('connection')
  handleMessage(client: any, payload: any) {
    if (payload.id) {
      console.log(payload);
      this.addUser(payload.id, client.id);
      console.log(this.users);
    }
  }
  afterInit(server: any) {
    this.logger.log('Initialized');
    this.users = new Array();
  }
  handleConnection(client: any, ...args: any[]) {
    this.logger.log(`Client connected ${client.id}`);
  }
  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected ${client.id}`);
    this.removeUser(client.id);
  }

  // Messages

  @SubscribeMessage('sendMessage')
  sendMessage(client: any, payload: any) {
    const user = this.getUser(payload.id);
    if (user?.userId) {
      console.log('wa drari');
      this.server.to(user.socketId).emit('receiveMessage', payload);
    }
    // console.log(payload);
    // return 'Hello world!';
  }
}
