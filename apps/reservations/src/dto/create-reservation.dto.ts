import { IsDate, IsString, IsNotEmpty } from 'class-validator';
export class CreateReservationDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  placeId: string;

  @IsString()
  @IsNotEmpty()
  invoiceId: string;
}
