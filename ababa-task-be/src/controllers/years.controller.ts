import express from "express";
import * as yearsService from "../services/years.service";

const getYears = async (_req: express.Request, res: express.Response) => {
  try {
    const years = await yearsService.getYears();
    res.send(years);
  } catch (error) {
    res.status(500).send("Error retrieving years from the database");
  }
};

export { getYears };
