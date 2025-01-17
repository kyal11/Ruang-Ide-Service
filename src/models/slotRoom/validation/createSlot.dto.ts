import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsDateString,
  Matches,
} from 'class-validator';

export class CreateSlotDto {
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'startTime must be in the format HH:mm (e.g., 09:00)',
  })
  startTime: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: 'endTime must be in the format HH:mm (e.g., 10:00)',
  })
  endTime: string;

  @IsBoolean()
  @IsOptional()
  isBooked?: boolean;

  @IsBoolean()
  @IsOptional()
  isExpired?: boolean;
}
